import {
  View,
  Text,
  Modal,
  StatusBar,
  TouchableOpacity,
  TextInput,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { useWorkoutStore } from "store/workout-store";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import ExerciseCard from "./ExerciseCard";
import { Exercise } from "@/lib/sanity/types";
import { client } from "@/lib/sanity/client";
import { exercisesQuery } from "@/lib/sanity/queries";

interface ExerciseSelectionModalProps {
  visible: boolean;
  onClose: () => void;
}

const ExerciseSelectionModal = ({
  visible,
  onClose,
}: ExerciseSelectionModalProps) => {
  const router = useRouter();
  const { addExerciseToWorkout } = useWorkoutStore();
  const [exercises, setExercises] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredExercises, setFilteredExercises] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const handleExercisePress = (exercise: Exercise) => {
    addExerciseToWorkout({ name: exercise.name, sanityId: exercise._id });
    onClose();
  };

  const fetchExercises = async () => {
    try {
      const exercises = await client.fetch(exercisesQuery);
      setExercises(exercises);
      setFilteredExercises(exercises);
    } catch (error) {
      console.error("Error fetching exercises:", error);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  useEffect(() => {
    const filtered = exercises.filter((exercise: any) =>
      exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredExercises(filtered);
  }, [searchQuery, exercises]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchExercises();
    setRefreshing(false);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView className="flex-1 bg-white">
        <StatusBar barStyle="dark-content" />

        {/* Header */}
        <View className="bg-white px-4 pt-4 pb-6 shadow-sm border-b border-gray-100">
          <View className="flex-row items-center justify-between">
            <Text className="text-2xl font-bold text-gray-800">
              Add Exercise
            </Text>
            <TouchableOpacity
              onPress={onClose}
              className="w-8 h-8 items-center justify-center"
            >
              <Ionicons name="close" size={24} color="#6B7280" />
            </TouchableOpacity>
          </View>

          <Text className="text-gray-600 mb-4">
            Tap any exercise to add it to your workout
          </Text>

          {/* Seach Bar */}
          <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-3">
            <Ionicons name="search" size={20} color="#6B7280" />
            <TextInput
              className="flex-1 ml-3 text-gray-800"
              placeholder="Seach exercises..."
              placeholderTextColor={"#9ca3af"}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery("")}>
                <Ionicons name="close-circle" size={20} color={"#6b7280"} />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {/* Exercise list */}
        <FlatList
          data={filteredExercises}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 16,
            paddingBottom: 32,
            paddingHorizontal: 16,
          }}
          renderItem={({ item }) => (
            <ExerciseCard
              item={item}
              onPress={() => handleExercisePress(item)}
            />
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["#3B82F6"]}
              tintColor={"#3B82F6"}
              title="Pull to refresh exercises"
              titleColor={"#6B7280"}
            />
          }
          ListEmptyComponent={
            <View className="bg-white rounded-2xl p-8 items-center">
              <Ionicons name="fitness-outline" size={64} color={"#9CA3AF"} />
              <Text className="text-xl font-semibold text-gray-900 mt-4">
                {searchQuery ? "No exercises found" : "Loading exercises..."}
              </Text>
              <Text className="text-gray-600 text-center mt-2">
                {searchQuery
                  ? "Try adjusting your search"
                  : "Your exercises will appear here"}
              </Text>
            </View>
          }
        />
      </SafeAreaView>
    </Modal>
  );
};

export default ExerciseSelectionModal;

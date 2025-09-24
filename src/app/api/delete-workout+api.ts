import { adminClient } from "@/lib/sanity/client";

export async function POST(request: Request) {
  const { workoutId }: { workoutId: string } = await request.json();
  console.log("Helloooo");

  try {
    await adminClient.delete(workoutId as string);

    console.log("Workout deleted succesfully:", workoutId);

    return Response.json({
      success: true,
      message: "Workout deleted succesfully",
    });
  } catch (error) {
    console.error("Error deleting workout:", error);
    return Response.json({ error: "Failed to save workout" }, { status: 500 });
  }
}

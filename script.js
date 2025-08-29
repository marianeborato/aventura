import java.util.Scanner;

public class CrystalAdventure {

    public static void main(String[] args) {

        // Creates a Scanner object to read user input
        Scanner scanner = new Scanner(System.in);

        // --- Game Start ---
        System.out.println("--- The Legend of the Crystal Heart ---");
        System.out.println("You find yourself in the Whispering Forest in search of the Crystal Heart.");
        System.out.println("Your journey begins at a crossroads.");
        System.out.println("\n--- Your First Choice ---");
        System.out.println("1. The Path of Mist.");
        System.out.println("2. The Path of the Giant Root.");

        int choice1 = scanner.nextInt();

        // --- Process the First Choice ---
        if (choice1 == 1) {
            // Path of Mist
            System.out.println("\nYou chose the Path of Mist. The narrow trail leads you into a cold, damp fog. Suddenly, the trail divides again, and ahead of you, two figures appear: a fairy and a gnome.");
            System.out.println("\n1. Follow the Glimmering Fairy.");
            System.out.println("2. Follow the Old Gnome.");

            int choice2 = scanner.nextInt();

            // --- Process the Second Choice ---
            if (choice2 == 1) {
                // Follow the Glimmering Fairy
                System.out.println("\nYou trusted the fairy. She guides you to a series of floating stones. Some glimmer, while others are gray.");
                System.out.println("The fairy tells you to jump on the glimmering stones. However, a gray stone wiggles slightly.");
                System.out.println("\n1. Jump on the glimmering stones.");
                System.out.println("2. Jump on the gray stone.");

                int choice3 = scanner.nextInt();

                // --- Process the Third Choice ---
                if (choice3 == 1) {
                    // Jump on the glimmering stones
                    System.out.println("\nYou step onto the first glimmering stone. It holds firm under your weight, and you cross the abyss. On the other side, you find a stone gate with a mysterious rune.");
                    System.out.println("\n1. Touch the rune.");
                    System.out.println("2. Decipher the rune.");

                    int choice4 = scanner.nextInt();

                    // --- Process the Fourth Choice ---
                    if (choice4 == 2) {
                        // Decipher the rune
                        System.out.println("\nYou decide to decipher the rune. The inscription reads: '...Offer a touch of life, and the gate shall break.'");
                        System.out.println("\n1. Blow on the rune.");
                        System.out.println("2. Press the rune with your palm.");

                        int choice5 = scanner.nextInt();

                        // --- Process the Fifth Choice ---
                        if (choice5 == 1) {
                            // Blow on the rune
                            System.out.println("\nYou blow gently on the rune. It bursts into a bright light and the gate opens, revealing a secret garden!");
                            System.out.println("In the center rests the Crystal Heart, pulsing with energy.");
                            System.out.println("\n--- Congratulations! You found the Crystal Heart! Game Over. ---");
                        } else {
                            System.out.println("\nThe rune overloads with your energy. GAME OVER.");
                        }
                    } else {
                        System.out.println("\nYou touch the rune, and it emits an explosion of energy. GAME OVER.");
                    }
                } else {
                    System.out.println("\nYou step on the gray stone and it dissolves. You fall into the abyss. GAME OVER.");
                }
            } else {
                System.out.println("\nYou follow the gnome to the cave, but the path is blocked by a giant spiderweb. GAME OVER.");
            }
        } else if (choice1 == 2) {
            // Path of the Giant Root
            System.out.println("\nYou chose the Path of the Giant Root. You walk on, finding a tree with a mouth carved into its trunk. It asks for something of value to proceed.");
            System.out.println("\n1. Offer a drop of blood.");
            System.out.println("2. Offer a cherished memory.");

            int choice2 = scanner.nextInt();

            if (choice2 == 1) {
                System.out.println("\nThe tree absorbs your blood and grows, blocking the path. GAME OVER.");
            } else {
                System.out.println("\nYou offer a memory. The tree accepts it, and a new path opens, but you feel as though you have lost a part of yourself. The game continues...");
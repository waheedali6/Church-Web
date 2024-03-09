const names = ["Create an Event", "Create a Shop", "Create a Page", "Create a Website",
    "Create a Blog Post", "Get Social", "Collect Donations", "Upload a Sermon", "Upload a Photo", "Start a Discussion"];
const delay = 2000; // Delay in milliseconds

function printNamesContinuously() {
    const nameContainer = document.getElementById("name-container");
    let index = 0;

    function printNextName() {
        // Display the current name
        nameContainer.textContent = names[index];

        // Move to the next name
        index = (index + 1) % names.length;
    }

    // Initial print
    printNextName();

    // Set up an interval to continuously print names
    setInterval(() => {
        // Clear the content before printing the next name
        nameContainer.textContent = '';

        // Print the next name
        printNextName();
    }, delay);
}

// Start the continuous cycle
printNamesContinuously();




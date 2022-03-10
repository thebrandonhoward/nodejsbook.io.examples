function haveBreakfast(a, b, callback) {
    console.log("Enjoying " + a + "...");
    console.log("Enjoying " + b + "...");
    callback();
}

haveBreakfast("Eggs", "Grits", function() {
    console.log("Finished, and now it's time to get up.")
});

// Class with properties and methods
class Student {
    name;
    rollNo;
    branch;
    // readonly property
    college = "Shri Vishnu Engineering College for Women";
    // static property
    static university = "JNTU Kakinada";
    constructor(name, rollNo, branch) {
        this.name = name;
        this.rollNo = rollNo;
        this.branch = branch;
    }
    // Method
    display() {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
        console.log("Branch:", this.branch);
        console.log("College:", this.college);
    }
    showUniversity() {
        console.log("University:", Student.university);
    }
}
const s1 = new Student("Lahari", 101, "CSE-AI&ML");
console.log("----- Student Details -----");
s1.display();
console.log("\nPublic Property:");
console.log(s1.name);
console.log("\nStatic Property:");
s1.showUniversity();

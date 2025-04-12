import { columns,users } from "@/components/table/data";

describe("Data Integrity Tests", () => {
    it("should have correct column names and uids", () => {
        // Verify the structure of columns
        expect(columns).toHaveLength(4);

        const columnNames = columns.map((col) => col.name);
        const columnUids = columns.map((col) => col.uid);

        // Ensure all columns have name and uid properties
        expect(columnNames).toEqual(["NAME", "ROLE", "STATUS", "ACTIONS"]);
        expect(columnUids).toEqual(["name", "role", "status", "actions"]);
    });

    it("should have the correct structure for users", () => {
        // Check if the number of users is correct
        expect(users).toHaveLength(16);

        // Check that each user has expected properties
        users.forEach((user) => {
            expect(user).toHaveProperty("id");
            expect(user).toHaveProperty("name");
            expect(user).toHaveProperty("role");
            expect(user).toHaveProperty("status");
            expect(user).toHaveProperty("age");
            expect(user).toHaveProperty("avatar");
            expect(user).toHaveProperty("email");

            // Check that status is a valid value
            expect(["active", "paused", "vacation"]).toContain(user.status);
        });
    });

    it("should check if there are no duplicate users based on email", () => {
        const emails = users.map((user) => user.email);
        const uniqueEmails = new Set(emails);

        // Check if there are any duplicate emails
        expect(emails.length).toBe(uniqueEmails.size);
    });
});

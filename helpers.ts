// Helper function to safely parse JSON
function safeJsonParse<T>(jsonString: string): T | null {
    try {
        return JSON.parse(jsonString) as T;
    } catch (error) {
        console.error('Invalid JSON string:', error);
        return null; // Return null for invalid JSON
    }
}

// Function to process user data
interface User { id: number; name: string; }

function processUserData(jsonString: string): User | null {
    const data = safeJsonParse<User>(jsonString);
    if (!data) {
        console.error('No valid user data provided.');
        return null;
    }
    // Ensure user has required fields
    if (!data.id || !data.name) {
        console.error('User data lacks required fields: id and name.');
        return null;
    }
    return data;
}

// Example function usage
const userDataJson = '{ "id": 1, "name": "Alice" }';
const user = processUserData(userDataJson);
if (user) {
    console.log('User processed successfully:', user);
} else {
    console.log('User processing failed.');
}
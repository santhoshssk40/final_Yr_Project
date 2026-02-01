
const API_URL = "http://localhost:8000";

export const getStats = async () => {
    try {
        const response = await fetch(`${API_URL}/stats`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching stats:", error);
        return null; // Return null to handle error state in UI
    }
};

export const predictChurn = async (customerData) => {
    try {
        const response = await fetch(`${API_URL}/predict/churn`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(customerData),
        });
        if (!response.ok) {
            throw new Error('Predict request failed');
        }
        return await response.json();
    } catch (error) {
        console.error("Error predicting churn:", error);
        throw error;
    }
};

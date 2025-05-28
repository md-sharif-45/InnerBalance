import React, { useState } from "react";

const NutritionAnalyzer = () => {
  const [foodInput, setFoodInput] = useState('');
  const [nutritionData, setNutritionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNutritionData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-app-id': '180e7d87',
          'x-app-key': '490662e8b70fe0efdabda3b3fa19af4f',
        },
        body: JSON.stringify({ query: foodInput }),
      });

      const data = await response.json();
      setNutritionData(data);
    } catch (err) {
      setError('Failed to fetch nutrition data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[35%]">
      <h4 className="text-xl font-bold mb-4">Nutrition Analysis</h4>
      <textarea
        value={foodInput}
        onChange={(e) => setFoodInput(e.target.value)}
        placeholder="Enter what you ate (e.g., 2 eggs and toast)"
        className="w-full p-2 border rounded mb-4"
      />
      <button onClick={fetchNutritionData} className="px-6 py-2 bg-primary text-white rounded">
        Analyze
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {nutritionData && (
        <div className="mt-4">
          <h5 className="text-lg font-semibold ">Nutrition Facts:</h5>
          <ul className="list-disc list-inside">
            {nutritionData.foods.map((food, index) => (
              <li key={index}>
                {food.food_name}: {food.nf_calories} kcal, {food.nf_total_fat}g fat, {food.nf_protein}g protein
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NutritionAnalyzer;

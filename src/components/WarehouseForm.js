import React, { useState, useEffect } from 'react';

const WarehouseForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData);
  const [customFields, setCustomFields] = useState(initialData.customFields || []);
  const [newField, setNewField] = useState('');

  useEffect(() => {
    setFormData(initialData);
    setCustomFields(initialData.customFields || []);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCustomFieldChange = (index, value) => {
    const fields = [...customFields];
    fields[index].value = value;
    setCustomFields(fields);
  };

  const handleAddField = () => {
    if (newField) {
      setCustomFields([...customFields, { name: newField, value: '' }]);
      setNewField('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, customFields });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block text-gray-700">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block text-gray-700">Cluster</label>
        <input
          type="text"
          name="cluster"
          value={formData.cluster}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block text-gray-700">Space Available</label>
        <input
          type="number"
          name="space_available"
          value={formData.space_available}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block text-gray-700">Live Status</label>
        <input
          type="checkbox"
          name="is_live"
          checked={formData.is_live}
          onChange={(e) => setFormData({ ...formData, is_live: e.target.checked })}
          className="ml-2"
        />
      </div>
      {customFields.map((field, index) => (
        <div key={index}>
          <label className="block text-gray-700">{field.name}</label>
          <input
            type="text"
            value={field.value}
            onChange={(e) => handleCustomFieldChange(index, e.target.value)}
            className="border p-2 w-full"
          />
        </div>
      ))}
      <div className="flex items-center">
        <input
          type="text"
          value={newField}
          onChange={(e) => setNewField(e.target.value)}
          placeholder="New custom field"
          className="border p-2 w-full"
        />
        <button
          type="button"
          onClick={handleAddField}
          className="bg-green-500 text-white p-2 ml-2"
        >
          Add Field
        </button>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
        Save
      </button>
    </form>
  );
};

export default WarehouseForm;

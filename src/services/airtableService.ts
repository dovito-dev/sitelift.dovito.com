
const AIRTABLE_BASE_ID = 'appNomzaq9bYwlTfI';
const AIRTABLE_TABLE_NAME = 'SL-DVT Form Submissions';
const AIRTABLE_API_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;

interface FormData {
  name: string;
  businessName: string;
  website: string;
  email: string;
  phone: string;
}

export const submitToAirtable = async (formData: FormData, personalAccessToken: string) => {
  const response = await fetch(AIRTABLE_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${personalAccessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            'Name': formData.name,
            'Business Name': formData.businessName,
            'Website': formData.website,
            'Email': formData.email,
            'Phone': formData.phone,
            'Submitted At': new Date().toISOString(),
          }
        }
      ]
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`Airtable API error: ${response.status} ${response.statusText}`);
  }

  return await response.json();
};

// Google Sheets integration for quote form submissions
// This is a simple free solution using Google Apps Script

export interface QuoteFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  giftType: string;
  quantity: string;
  budget: string;
  occasion: string;
  message: string;
  submittedAt: string;
}

// Google Apps Script Web App URL (you'll get this after setup)
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';

export async function submitQuoteToGoogleSheets(data: QuoteFormData): Promise<{ success: boolean; message: string }> {
  try {
    const submissionData = {
      ...data,
      submittedAt: new Date().toLocaleString(),
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData),
    });

    if (response.ok) {
      return { success: true, message: 'Quote submitted successfully!' };
    } else {
      throw new Error('Failed to submit quote');
    }
  } catch (error) {
    console.error('Error submitting quote:', error);
    return { success: false, message: 'Failed to submit quote. Please try again.' };
  }
}

// Alternative: Email notification (using Formspree - free tier)
export async function submitQuoteViaEmail(data: QuoteFormData): Promise<{ success: boolean; message: string }> {
  try {
    const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '';
    
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      return { success: true, message: 'Quote submitted successfully! We\'ll contact you soon.' };
    } else {
      throw new Error('Failed to submit quote');
    }
  } catch (error) {
    console.error('Error submitting quote:', error);
    return { success: false, message: 'Failed to submit quote. Please try again.' };
  }
}

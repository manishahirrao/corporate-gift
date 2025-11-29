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

export async function submitQuoteToGoogleSheets(formData: any) {
  try {
    const submissionData = {
      ...formData,
      submittedAt: new Date().toLocaleString(),
    };

    console.log('Submitting quote data:', submissionData);
    console.log('Script URL:', process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL);

    const response = await fetch(
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxRLk7WBygHMpYzc4PiYWPdmfBR1mYF3Os7fE0AYRXEYPL6n_DrKgfW7MWUCJP4_Ro9/exec',
      {
        method: 'POST',
        mode: 'no-cors', // Bypass CORS
        headers: {
          'Content-Type': 'text/plain', // Important: use text/plain with no-cors
        },
        body: JSON.stringify(submissionData),
      }
    );
    
    console.log('Request sent to Google Sheets');
    
    // With no-cors mode, we can't read the response
    // But the data is still sent successfully
    return { success: true, message: 'Quote submitted successfully!' };
    
  } catch (error) {
    console.error('Error submitting quote:', error);
    console.error('Environment variables:', {
      NEXT_PUBLIC_GOOGLE_SCRIPT_URL: process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ? 'Set' : 'Not set'
    });
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

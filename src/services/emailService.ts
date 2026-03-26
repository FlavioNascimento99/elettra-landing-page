// API configuration and utilities
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export interface EmailPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Send email through the backend API
 */
export async function sendEmail(data: EmailPayload): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_URL}/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result: ApiResponse = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Erro ao enviar email');
    }

    return result;
  } catch (error) {
    console.error('Email API Error:', error);
    throw error;
  }
}

/**
 * Check if the email server is running
 */
export async function checkEmailServerHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/health`);
    return response.ok;
  } catch {
    return false;
  }
}

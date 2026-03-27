# 📧 Email Modal Component

A minimal modal component for sending quick emails to wagnerrclemente@gmail.com.

## 🎯 Features

- ✅ Clean, minimal design with only essential fields
- ✅ Smooth animations with Framer Motion
- ✅ Real email sending via backend API
- ✅ Success/error feedback
- ✅ Loading states
- ✅ Responsive design
- ✅ Auto-closes on success

## 📋 Fields

- **Name** - Sender's name (required)
- **Email** - Sender's email for reply (required)
- **Message** - Email message content (required)

## 🚀 Usage

### 1. Import the Modal

```tsx
import EmailModal from '../components/EmailModal';
```

### 2. Add to Your Component

```tsx
import { useState } from 'react';
import EmailModal from '../components/EmailModal';

export default function MyComponent() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsEmailModalOpen(true)}>
        Abrir Modal de Email
      </button>

      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </div>
  );
}
```

## 📍 Location

File: `src/components/EmailModal.tsx`

## 🎨 Styling

Uses Tailwind CSS with the project's existing color scheme:
- Primary colors from theme config
- Responsive padding and sizing
- Smooth animations and transitions

## 🔄 Flow

1. User clicks button to open modal
2. Modal animates in with backdrop
3. User fills minimal form (name, email, message)
4. User clicks "Enviar"
5. Loading state while sending
6. Success/error message appears
7. Modal auto-closes on success (2 seconds delay)

## 📧 Email Recipient

Hardcoded recipient: `wagnerrclemente@gmail.com`

To change recipient, update in `ContactSection.tsx` or where the modal is used.

## 🔗 Connected to

- Backend: `server.ts` POST `/send-email`
- Service: `src/services/emailService.ts`
- Uses: `sendEmail()` function with phone defaulted to "(via email modal)"

## 📱 Responsive

- Mobile: Full width with padding
- Tablet: Centered, max-width 448px (md breakpoint)
- Desktop: Same as tablet, center of screen

## ♿ Accessibility

- Proper ARIA labels
- Keyboard navigation support
- Focus management with animated backdrop

---

**Example Integration in Header Component:**

```tsx
import { useState } from 'react';
import EmailModal from './EmailModal';

export default function Header() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsEmailModalOpen(true)}
        className="btn-primary"
      >
        Enviar Email
      </button>
      
      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </>
  );
}
```

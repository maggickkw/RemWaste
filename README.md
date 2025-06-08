# Skip Selection Component

A modern, responsive React component for selecting skip sizes with a dark theme UI, built with TypeScript and Tailwind CSS.

## Overview

This component provides an intuitive interface for users to select skip sizes for waste disposal services. It features a dark theme design with single-selection functionality and a fixed bottom banner for easy checkout flow.

## Features

### Core Functionality
- **Single Selection**: Only one skip can be selected at a time
- **Dynamic Data**: Fetches skip data using React Query (`useSkipData` hook)
- **Loading States**: Displays loading spinner while fetching data
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens

### User Interface
- **Dark Theme**: Modern dark gray color scheme with blue accents
- **Progress Indicator**: Visual step indicator showing current position in booking flow
- **Skip Cards**: Individual cards displaying skip details with hover effects
- **Selection Feedback**: Visual indicators for selected state with blue borders and rings
- **Bottom Banner**: Fixed banner showing selected skip details and continue button

### Visual Elements
- **Road Permission Warnings**: Yellow warning badges for skips not allowed on roads
- **Size Indicators**: Blue badges showing skip yard capacity
- **Price Display**: Prominent pricing in blue text
- **Interactive Buttons**: Smooth transitions and hover effects

## Component Structure

```
SkipSelection/
├── SkipSelection.tsx    # Main container component
├── SkipCard.tsx        # Individual skip card component
└── README.md           # This documentation
```

## Technical Implementation

### State Management
- **Single Selection State**: Uses `selectedSkipId` (string | number | null) instead of array
- **React Query Integration**: Leverages `useSkipData()` hook for data fetching
- **Callback Props**: Accepts `onSkipSelect` callback for parent component integration

### Styling Approach
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Responsive Classes**: Mobile-first responsive design with `sm:`, `lg:` prefixes
- **Dark Theme Colors**:
  - Background: `bg-gray-900` (main), `bg-gray-800` (cards)
  - Text: `text-white` (primary), `text-gray-400` (secondary)
  - Accents: `text-blue-400` (prices), `bg-blue-600` (buttons)

### Accessibility Features
- **Touch-Friendly**: Large touch targets for mobile devices
- **Keyboard Navigation**: Standard button focus states
- **Screen Reader Support**: Semantic HTML structure with proper alt texts
- **High Contrast**: Sufficient color contrast ratios for readability


### Single Selection Pattern
- **User Experience**: Prevents confusion by allowing only one skip selection
- **Business Logic**: Aligns with typical skip hire process (one skip per booking)
- **State Simplicity**: Reduces complexity compared to multi-selection

### Fixed Bottom Banner
- **Always Visible**: Ensures continue button is always accessible
- **Context Preservation**: Shows selected skip details without scrolling
- **Mobile Optimization**: Follows mobile app design patterns

### Dark Theme Choice
- **Modern Aesthetic**: Aligns with contemporary web design trends
- **Visual Hierarchy**: Better contrast for highlighting selected items
- **Brand Consistency**: Matches provided design reference

### Performance Considerations
- **Optimized Images**: Different images for different skip sizes (`<20` vs `>=20` yards)
- **Efficient Rendering**: Uses React.memo patterns and useCallback for optimization
- **Minimal Re-renders**: State updates only trigger necessary component updates

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for screens from 320px to 1920px+

## Dependencies

- React 
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
- React Query (for data fetching)

## Future Enhancements

- **Skip Size Guide**: Modal or drawer with size recommendations
- **Comparison Feature**: Side-by-side skip comparison
- **Availability Indicators**: Real-time availability status
- **Price Calculator**: Dynamic pricing based on location/dates
- **Animation Library**: Enhanced micro-interactions with Framer Motion

## Maintenance Notes

- **Image Assets**: Update `SkipImage` and `Skip20Image` imports if asset locations change
- **API Integration**: Modify `useSkipData` hook if API endpoints change
- **Styling Updates**: Use Tailwind config for theme customization
- **Type Safety**: Update `SkipI` interface if data structure changes
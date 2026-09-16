# Amaj Academic Center - Application Structure

## Project Directory

```
amaj-academic-center/
├── index.html                 # Root HTML file
├── package.json              # Project dependencies
├── vite.config.js            # Vite build configuration
├── README.md                 # Project documentation
└── src/
    ├── main.js              # Application entry point
    ├── App.vue              # Root Vue component
    ├── styles/
    │   └── main.css         # Global styles
    ├── components/          # Reusable components
    │   ├── Header.vue       # Application header
    │   ├── Navigation.vue   # Navigation bar
    │   └── Footer.vue       # Application footer
    ├── pages/               # Page components
    │   ├── Dashboard.vue    # Dashboard view
    │   ├── Students.vue     # Students management
    │   ├── Teachers.vue     # Teachers management
    │   ├── Classes.vue      # Classes management
    │   ├── Fees.vue         # Fees tracking
    │   ├── Attendance.vue   # Attendance tracking
    │   ├── Exams.vue        # Exam results
    │   ├── Books.vue        # Book inventory
    │   ├── Expenses.vue     # Expense tracking
    │   └── Backup.vue       # Backup/Restore
    └── composables/
        └── useDatabase.js   # Database management & local storage
```

## Component Overview

### Components
- **Header**: Displays academy name and subtitle
- **Navigation**: Tab-based navigation between sections
- **Footer**: Footer with academy motto

### Pages
- **Dashboard**: Key statistics and settings overview
- **Students**: Student list with search functionality
- **Teachers**: Teacher directory and information
- **Classes**: Class schedules and details
- **Fees**: Fee payment records and receipts
- **Attendance**: Attendance records by class and date
- **Exams**: Exam scores and results
- **Books**: Textbook inventory tracking
- **Expenses**: Operational expense records
- **Backup**: Data backup and restore functionality

### Composables
- **useDatabase**: Handles all database operations and local storage management

## Running the Application

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Features

✅ Comprehensive academy management system
✅ Vue 3 + Vite for modern development
✅ Local storage for data persistence
✅ Responsive design for all devices
✅ Export/Import data as JSON
✅ Search functionality
✅ Real-time statistics
✅ Dark/Light mode ready styling

---

**Created**: 2026
**Language**: Farsi (Persian)
**License**: MIT

const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Fix login issue",
          "description": "Resolve the login bug reported by users.",
          "taskDate": "2025-02-07",
          "category": "Bug Fix",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update UI",
          "description": "Revamp the dashboard UI for better user experience.",
          "taskDate": "2025-02-10",
          "category": "UI/UX",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Optimize Database",
          "description": "Improve query performance for faster loading times.",
          "taskDate": "2025-02-12",
          "category": "Database",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Write API Documentation",
          "description": "Document all available API endpoints with examples.",
          "taskDate": "2025-02-08",
          "category": "Documentation",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Security Audit",
          "description": "Perform security audit for potential vulnerabilities.",
          "taskDate": "2025-02-15",
          "category": "Security",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix Payment Gateway",
          "description": "Resolve issues with failed transactions in Stripe integration.",
          "taskDate": "2025-02-18",
          "category": "Bug Fix",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Deploy New Feature",
          "description": "Release the new analytics dashboard feature.",
          "taskDate": "2025-02-09",
          "category": "Deployment",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Refactor Codebase",
          "description": "Improve code readability and maintainability.",
          "taskDate": "2025-02-20",
          "category": "Code Cleanup",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Implement Dark Mode",
          "description": "Add dark mode toggle feature for better UI accessibility.",
          "taskDate": "2025-02-11",
          "category": "UI/UX",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix Mobile Responsiveness",
          "description": "Ensure the web app is fully responsive on all devices.",
          "taskDate": "2025-02-14",
          "category": "UI/UX",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Write Unit Tests",
          "description": "Add unit tests for core modules.",
          "taskDate": "2025-02-17",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Optimize Frontend Performance",
          "description": "Improve loading speed and reduce unnecessary re-renders.",
          "taskDate": "2025-02-13",
          "category": "Performance",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Migrate to New Server",
          "description": "Move the production environment to a new cloud provider.",
          "taskDate": "2025-02-22",
          "category": "Infrastructure",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix Logout Bug",
          "description": "Ensure users are properly logged out from all devices.",
          "taskDate": "2025-02-25",
          "category": "Bug Fix",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
export const setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

} 
export const getLocalStorage=()=>{
  const employees =JSON.parse(localStorage.getItem('employees'))
  const admin =JSON.parse(localStorage.getItem('admin'))
  return {employees,admin}

}
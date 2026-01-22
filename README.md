#  Project Workspace Management System

A robust full-stack solution designed for teams to manage projects, track milestones, and monitor deadlines in real-time. Whether it's tracking phase completion or managing role-based access, this system ensures project transparency and efficiency.

---

## 📖 About the Project

Manage multiple projects with clearly defined phases and dedicated roles. Each project is managed by a **Host** and tracked by **Monitors**. 

The core logic of this application focuses on:
* **Dynamic Phase Tracking:** Monitors update completion dates, and the system automatically calculates if a phase was **Early, On Time, or Delayed**.
* **Real-time Synchronization:** Using Socket.IO, any update in project status is reflected across the dashboard instantly without manual refreshes.
* **Efficient Workflow:** Automated tracking of delay/early day counts to help teams analyze performance.

---

## ✨ Key Features

### 🔐 User Roles & Authentication
* **Secure Login:** JWT-based authentication for both Hosts and Monitors.
* **Role-Based Access (RBAC):** * **Hosts:** Have full authority to create, update, and delete projects.
    * **Monitors:** Focused access to track and update progress only for assigned projects.

### 📊 Project & Phase Management
* **Custom Identification:** Projects use both MongoDB `_id` and a unique **Custom Project ID** for easy external referencing and frontend integration.
* **Automated Status Logic:** The system calculates delay/early day counts automatically when a phase is marked complete.
* **Detailed Data Structure:** Every phase tracks specific metrics like `deadline`, `completionDate`, and `isOnTime` status.

### ⚡ Real-time Updates
* **Instant Notifications:** Status changes are broadcasted via **Socket.IO** so the entire team stays updated without page reloads.

---

## 🛠 Tech Stack

| Layer | Technology Used |
| :--- | :--- |
| **Frontend** | Html, Css, JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose) |
| **Real-time** | Socket.IO |
| **Authentication** | JWT (JSON Web Tokens) |
| **Security** | Bcrypt (Password Hashing) |

---

## ✍️ Author

* MOPURI SAIKUMAR REDDY
* **Email** - saikumarmopuri8639@example.com

---

# 📝 **Todo List Application**

A simple and interactive **Todo List Application** built with **React.js**. This app allows users to create, edit, delete, and mark tasks as complete. Completed tasks are stored separately, and all data is saved using **localStorage** to maintain persistence even after refreshing the page.

---

## 📋 **Features**
- **Add New Todos**: Create a new task with a title and description.  
- **Edit Todos**: Modify the title and description of existing tasks.  
- **Mark as Complete**: Move tasks from the active list to the completed list.  
- **Delete Todos**: Delete tasks from both the active and completed lists.  
- **Persistent Data**: All data is saved using **localStorage**, so no progress is lost after refreshing.  
- **Simple Navigation**: Switch between **Todo List** and **Completed List** with a simple toggle button.  

---

## 📂 **Project Structure**
```
📁 src
 ┣ 📜 App.js       // Main component containing all functionality
 ┣ 📜 App.css      // Styling for the app layout and components
 ┗ 📜 index.js     // Entry point of the application
```

---

## 🛠️ **Technologies Used**
- **React.js**: A JavaScript library for building user interfaces.  
- **React Icons**: Used to display icons for edit, delete, and complete actions.  
- **localStorage**: Browser storage to persist user data.  
- **HTML/CSS**: For the user interface and styling.  

---

## 🚀 **How to Run the App**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/RenanaTurgeman/TO-DO-LIST.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd <project_directory>
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Application**:
   ```bash
   npm start
   ```

5. **Access the App**:  
   Open [http://localhost:3000](http://localhost:3000) in your browser to view it.

---

## 🧭 **How to Use the App**
1. **Add a New Todo**:  
   - Enter the title and description for your task.  
   - Click the **Add** button to add it to the list.  

2. **Edit an Existing Todo**:  
   - Click the **edit icon** (✏️) on the task you want to edit.  
   - Update the title or description in the input fields.  
   - Click the **Update** button to save changes.  

3. **Mark a Task as Complete**:  
   - Click the **check icon** (✔️) to mark the task as complete.  
   - The task will be moved from the active list to the **Completed** list.  

4. **Delete a Todo**:  
   - Click the **delete icon** (🗑️) to delete the task from the list.  

5. **View Completed Todos**:  
   - Click the **Completed** button to see the list of completed tasks.  

---

## 📦 **localStorage Usage**
The app uses **localStorage** to save tasks locally in the browser.  
**Keys Used**: 
- `todolist`: Stores the active todo list.  
- `completedTodos`: Stores the completed todos.  

This ensures that tasks are not lost when the page is refreshed.  

---

## 📸 **Screenshots**
### **Todo List**
- Add, edit, and delete tasks.
![image](https://github.com/user-attachments/assets/bca032f0-5610-4264-9ab4-7d0d68e61480)
![image](https://github.com/user-attachments/assets/65dabf45-f76e-484b-aabe-f2c5be9fec65)
![image](https://github.com/user-attachments/assets/4a3c5f29-5d60-41e1-a61d-8a2779886c98)
![image](https://github.com/user-attachments/assets/a99a3b20-27df-46cc-8a94-8e942ac2790f)
![image](https://github.com/user-attachments/assets/672bc952-d5c4-45c7-9b19-2e8a373a61df)


  
### **Completed List**
- View completed tasks with the date and time of completion.  
![image](https://github.com/user-attachments/assets/0f8e66a6-96d2-4ff1-b3a1-3016c7140dfa)

---

## ✨ **Potential Improvements**
- **Responsive Design**: Ensure the app works well on mobile devices.  
- **Animations**: Add animations when adding, editing, or deleting tasks.  
- **Drag-and-Drop**: Allow users to rearrange the order of tasks.  

---

## 🤝 **Acknowledgments**
This project was developed with the help of a YouTube tutorial. You can view the tutorial [here](https://www.youtube.com/watch?v=c_1WI1iLi3g&list=PLg8h8Ej1e8l3YF-GTW1gxmDISO-qt_RSk&index=4). 

---

If you have any questions or suggestions, feel free to reach out.  
**Thank you for using the Todo List App!** 😊

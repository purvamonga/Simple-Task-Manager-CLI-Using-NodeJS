**Task Tracker CLI**

A simple command-line task management tool built with Node.js that helps you organize and track your tasks efficiently.
Features

	
		✅ Add new tasks with auto-generated IDs 
		
		📋 List all tasks with details
		
		✏️ Update task descriptions
		
		🗑️ Delete tasks
		
		🔄 Mark tasks as in-progress
		
		✅ Mark tasks as done
		
		📁 Persistent storage using JSON file

**Installation**

	1) Clone or download the script
	2) Ensure you have Node.js installed
	3) Navigate to the project directory

**Task Structure**
Each task contains:
	
	ID: Unique identifier (auto-generated)
	Title: Task description
	Status: pending, in-progress, or done
	Creation Time: When the task was created
	Updated Time: When the task was last modified

**Data Storage**
	Tasks are stored in a tasks.json file in the same directory as the script. 
	The file is automatically created if it doesn't exist.
	Command Variations
	Commands are case-insensitive:

	add / Add / ADD
	list / List / LIST
	update / Update / UPDATE
	delete / Delete / DELETE

**Error Handling**
The application includes robust error handling for:
	
	1) Invalid task IDs
	2) Missing task descriptions
	3) File system errors
	4) JSON parsing errors

**Learning Concepts Demonstrated**
This project showcases several important programming concepts:
	
	File System Operations: Reading and writing JSON files
	Command Line Arguments: Processing process.argv
	JSON Data Handling: Parsing and stringifying JSON data
	Error Handling: Try-catch blocks and graceful error messages
	Array Operations: Finding, updating, and removing items
	String Manipulation: Joining arguments and trimming whitespace
	Date/Time Handling: ISO string timestamps
	Control Flow: Conditional statements and loops

**Requirements**
Node.js (any recent version)
No external dependencies required
____________________________________________________________________________________________________________________________

This is a beginner-friendly project perfect for learning Node.js fundamentals and CLI application development.

Project inspired by: https://roadmap.sh/projects/task-tracker
 

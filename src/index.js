import Project from './modules/project.js'
import Todo from './modules/todo.js'
import { getUnixTime } from 'date-fns'

const LOCAL_STORAGE_PROJECTS_KEY = 'todo.project'
const LOCAL_STORAGE_PROJECT_ID_KEY = 'todo.selectedProjectId'
let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || []
let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_PROJECT_ID_KEY)

const projectContainer = document.querySelector('[data-project-container]')
const projectList = projectContainer.querySelector('[data-project-list]')
const projectAddButton = projectContainer.querySelector('[data-project-add-button]')
const projectAddInput = projectContainer.querySelector('[data-project-add-input]')
const projectDelete = projectContainer.querySelector('[data-project-delete]')
const todoContainer = document.querySelector('[data-todo-container]')
const projectName = todoContainer.querySelector('[data-project-name]')
const todoList = todoContainer.querySelector('[data-todo-list]')
const todoAddButton = todoContainer.querySelector('[data-todo-add-button]')
const todoAddInput = todoContainer.querySelector('[data-todo-add-input]')

projectAddButton.addEventListener('click', addProject)
todoAddButton.addEventListener('click', addTodo)
projectList.addEventListener('click', selectProject)
projectDelete.addEventListener('click', deleteProject)

function selectProjectTodos() {
    if(selectedProjectIndex() === undefined) {
        return []
    } else {
        return projects[selectedProjectIndex()].todos
    }
}

function selectedProjectIndex() {
    const index = projects.findIndex(project => project.id.toString() === selectedProjectId)
    // if projects.findIndex return -1
    if(index !== -1) return index
}

function deleteProject() {
    if(!selectedProjectId) return
    projects.splice(selectedProjectIndex(), 1)
    selectedProjectId = null
    projectName.innerText = null
    saveAndRender()
}

function selectProject(e) {
    selectedProjectId = e.target.dataset.id
    saveAndRender()
}

function addProject(e) {
    e.preventDefault()
    if (projectAddInput.value === '') return
    projects.push(new Project(getUnixTime(new Date()), projectAddInput.value))
    projectAddInput.value = null
    saveAndRender()
}

function saveAndRender() {
    localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(projects))
    localStorage.setItem(LOCAL_STORAGE_PROJECT_ID_KEY, selectedProjectId)
    renderProjectList()
    renderTodoList()
}

function clearList(element) {
    while (element.firstElementChild) {
        element.removeChild(element.firstElementChild)
    }
}

function renderProjectList() {
    clearList(projectList)
    projects.forEach(project => {
        const li = document.createElement('li')
        li.innerText = project.name
        li.dataset.id = project.id
        if(li.dataset.id === selectedProjectId) {
            li.className = 'active-list'
            projectName.innerText = project.name
        }
        projectList.appendChild(li)
    })
}

function addTodo(e) {
    e.preventDefault()
    if(!selectedProjectId) return
    if (todoAddInput.value === '') return
    selectProjectTodos().push(new Todo(getUnixTime(new Date()), todoAddInput.value))
    todoAddInput.value = null
    saveAndRender()
}

function renderTodoList() {
    clearList(todoList)
    if(!selectedProjectId && projects.length) return
    selectProjectTodos().forEach(task => {
        const li = document.createElement('li')
        const input = document.createElement('input')
        const label = document.createElement('label')
        input.type = 'checkbox'
        input.id = task.name
        label.htmlFor = task.name
        label.innerText = task.name
        if(task.completed) {
            input.checked = true
        }
        todoList.appendChild(li)
        li.appendChild(input)
        li.appendChild(label)
    })
}

// saveAndRender()

renderProjectList()
renderTodoList()
// localStorage.clear()
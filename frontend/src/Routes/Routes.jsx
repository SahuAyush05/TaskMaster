import { Routes, Route, Navigate } from "react-router-dom"
import Landing from "../components/landing/Landing"
import SignIn from "../components/UserAuth/SignIn"
import SignUp from "../components/UserAuth/SignUp"
import MainLayout from "../components/MainLayout/MainLayout"
import Dashboard from "../components/MainLayout/Dashboard/Dashboard"
import CreateNewTask from "../components/MainLayout/Tasks/AddTask"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-task" element={<CreateNewTask />} />
        </Route>

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

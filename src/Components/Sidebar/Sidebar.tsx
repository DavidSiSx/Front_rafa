"use client"

import type React from "react"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { LayoutDashboard, BarChart2, FileX, LogOut } from "lucide-react"
import { useAuth } from "../../Context/AuthContext"
import "./Sidebar.css"

const Sidebar: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  const closeSidebar = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false)
    }
  }

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-logo">
        <h1 className="sidebar-title">SAON</h1>
      </div>

      <nav className="sidebar-nav">
        <ul className="sidebar-nav-list">
          <li className="sidebar-nav-item">
            <Link
              to="/dashboard"
              className={`sidebar-nav-link ${location.pathname === "/dashboard" ? "active" : ""}`}
              onClick={closeSidebar}
            >
              <LayoutDashboard className="sidebar-nav-icon" />
              Dashboard
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="/estadisticas"
              className={`sidebar-nav-link ${location.pathname === "/estadisticas" ? "active" : ""}`}
              onClick={closeSidebar}
            >
              <BarChart2 className="sidebar-nav-icon" />
              Estadísticas
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="/parcelasEliminadas"
              className={`sidebar-nav-link ${location.pathname === "/parcelasEliminadas" ? "active" : ""}`}
              onClick={closeSidebar}
            >
              <FileX className="sidebar-nav-icon" />
              Parcelas Eliminadas
            </Link>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="sidebar-logout-btn" onClick={handleLogout}>
          <LogOut size={16} style={{ marginRight: "8px" }} />
          Cerrar sesión
        </button>
      </div>
    </aside>
  )
}

export default Sidebar


import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="bg-info footer">&copy; {year} Contact Manager. All rights reserved.</div>
    </div>
  )
}
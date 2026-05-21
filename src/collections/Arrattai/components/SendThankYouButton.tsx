'use client'

import React from 'react'
import { Button, useDocumentInfo } from '@payloadcms/ui'
import axios from 'axios'

const SendThankYouButton = () => {
  const { id } = useDocumentInfo()

  const handleSend = async () => {
    try {
      await axios.post('/api/send-admin-confirmation-mail', {
        id,
      })

      alert('Thank you mail sent successfully')
    } catch (error) {
      console.log(error)

      alert('Mail send failed')
    }
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <Button onClick={handleSend}>Send Thank You Mail</Button>
    </div>
  )
}

export default SendThankYouButton

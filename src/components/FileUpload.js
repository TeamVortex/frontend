import React, { useEffect } from 'react'

export default function FileUpload() {
    useEffect((event) => {
      event.preventDefault();

      }, []);
  return (
    <>
      <label className="btn btn-primary mx-2 my-1">
            Import Data
            <input type="file"/>
        </label>

    </>
  )
}

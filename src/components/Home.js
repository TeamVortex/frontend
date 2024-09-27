import React from 'react'

export default function Home() {
    return (
        <>
            <div className='row'>
                <div className='col-md-10 col-sm-6 mx-auto'>
                    <div className='home-container mt-2'>
                        Home Data
                        
                        {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Update Profile
                        </button>

                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">College</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className='row'>
                                                <div className='col-md-6 left-hero-section'>
                                                    <div className="mb-3">
                                                        <label htmlFor="collegeName" className="form-label">College Name</label>
                                                        <input type="text" className="form-control" id="collegeName" placeholder="Enter College Name" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="institutionType" className="form-label">Institution Type</label>
                                                        <input type="text" className="form-control" id="institutionType" placeholder="Enter Institution Type" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="approvalYear" className="form-label">AICTE Approval Year</label>
                                                        <input type="text" className="form-control" id="approvalYear" placeholder="Enter AICTE Approval Year" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="address" className="form-label">Address</label>
                                                        <textarea className="form-control" id="address" rows="4" placeholder="Enter Address"></textarea>
                                                    </div>
                                                </div>
                                                <div className='col-md-6 right-hero-section'>
                                                    <div className="mb-3">
                                                        <label htmlFor="universityName" className="form-label">University Name</label>
                                                        <input type="text" className="form-control" id="universityName" placeholder="Enter University Name" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="approvalNo" className="form-label">AICTE Approval No</label>
                                                        <input type="text" className="form-control" id="approvalNo" placeholder="Enter AICTE Approval No" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="nbaAccreditations" className="form-label">NBA Accreditations</label>
                                                        <input type="text" className="form-control" id="nbaAccreditations" placeholder="Enter NBA Accreditations" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="email" className="form-label">Email</label>
                                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="coursesOffered" className="form-label">Courses Offered:</label>
                                                        <input type="text" className="form-control" id="coursesOffered" placeholder="Enter Courses Offered" required />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}





                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Evaluator Profile
                        </button>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Evaluator</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className='row'>
                                                <div className='col-md-6 left-hero-section'>
                                                    <div className="mb-3">
                                                        <label htmlFor="evaluatorId" className="form-label">Evaluator Id:</label>
                                                        <input type="text" className="form-control" id="evaluatorId" placeholder="Enter Evaluator Id" required />
                                                    </div>

                                                    <div className="mb-3">
                                                        <label htmlFor="designation" className="form-label">Designation</label>
                                                        <input type="text" className="form-control" id="designation" placeholder="Enter Designation" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="expertiseArea" className="form-label">Expertise Area</label>
                                                        <input type="text" className="form-control" id="expertiseArea" placeholder="Enter Expertise Area" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="assignedColleges" className="form-label">Assigned Colleges:</label>
                                                        <select multiple className="form-control" id="assignedColleges" required disabled>
                                                            <option value="college1">College 1</option>
                                                            <option value="college2">College 2</option>
                                                            <option value="college3">College 3</option>
                                                        </select>
                                                        </div>
                                                        
                                                </div>
                                                <div className='col-md-6 right-hero-section'>
                                                    <div className="mb-3">
                                                        <label htmlFor="evaluatorName" className="form-label">Evaluator Name</label>
                                                        <input type="text" className="form-control" id="evaluatorName" placeholder="Enter Evaluator Name" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="organization" className="form-label">Organization:</label>
                                                        <input type="text" className="form-control" id="organization" placeholder="Enter Organization Name" required />
                                                    </div>
                                                    <div className="mb-3">
                                                            <label htmlFor="evaluationOffered" className="form-label">Evaluation Offered:</label>
                                                            <input type="text" className="form-control" id="evaluationOffered" placeholder="Enter Evaluation Offered" required />
                                                        </div>

                                                    <div className="mb-3">
                                                        <label htmlFor="assignedRegion" className="form-label">Assigned Region</label>
                                                        <select multiple className="form-control" id="assignedColleges" required disabled>
                                                            <option value="college1">District 1</option>
                                                            <option value="college2">District 2</option>
                                                            <option value="college3">District 3</option>
                                                        </select>
                                                    </div>
                                                    </div>
                                                </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

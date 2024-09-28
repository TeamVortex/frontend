import React, { useEffect, useState } from 'react';
import './css/Home.css'

export default function Home(props) {
    const [modalSet, setModalSet] = useState(props.role);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        // Simulated fetch request; replace with your actual API call
        const mockData = {
            totalDocuments: 100,
            statusCounts: {
                verified: 70,
                pending: 20,
                rejected: 10,
            },
            evaluators: [
                {
                    name: "Evaluator 1",
                    assigned: 30,
                    completed: 25,
                    loginCount: 5,
                    timeSpent: 120,
                    avgResponseTime: 15, // minutes
                    rejectionRate: 16.67, // percentage
                    feedbackCount: 3,
                },
                // Add more evaluators...
            ],
            rejectionReasons: [
                "Incomplete documents",
                "Incorrect format",
                "Missing signatures",
            ],
            feedback: ["Need clearer guidelines", "More training on the system"],
            outstandingIssues: [
                "System downtime last week",
                "Slow document upload speed",
            ],
            alerts: [
                { id: 1, message: "3 documents are pending review.", type: "warning" },
                {
                    id: 2,
                    message: "Evaluator training module is due soon.",
                    type: "info",
                },
                {
                    id: 3,
                    message: "Document upload system will be down for maintenance.",
                    type: "critical",
                },
            ],
            documentReviewHistory: [
                { evaluator: "Evaluator 1", date: "2023-09-01", status: "Verified" },
                { evaluator: "Evaluator 1", date: "2023-09-05", status: "Rejected" },
                { evaluator: "Evaluator 1", date: "2023-09-10", status: "Verified" },
                { evaluator: "Evaluator 2", date: "2023-09-12", status: "Pending" },
                // Add more history...
            ],
            categoryBreakdown: {
                institutions: [
                    { type: "Engineering", count: 50 },
                    { type: "Management", count: 30 },
                    { type: "Pharmacy", count: 20 },
                ],
            },
        };
        setData(mockData);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className='row'>
                <div className='col-md-10 col-sm-6 mx-auto'>
                    <div className='home-container mt-2'>
                        <div className='row'>
                            <div className='col-md-6 left_section_1'>
                            </div>
                            <div className='col-md-6 right_section_1' style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'end' }}>
                                {modalSet === 'college' ? (
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#collegeModal" >
                                        Update Profile
                                    </button>
                                ) : modalSet === 'evaluator' ? (
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#evaluatorModal" >
                                        Evaluator Profile
                                    </button>
                                ) : null}
                            </div>
                        </div>

                        {modalSet === 'evaluator' && (<>
                            <div className='row'>
                                <div className='col-md-6 left_section_2'>
                                    <div className="status-overview">
                                        <h2>Verification Status Overview</h2>
                                        <p>
                                            <strong>Total Documents Submitted:</strong>{" "}
                                            {data.totalDocuments}
                                        </p>
                                        <p>
                                            <strong>Verified:</strong> {data.statusCounts.verified}
                                        </p>
                                        <p>
                                            <strong>Pending:</strong> {data.statusCounts.pending}
                                        </p>
                                        <p>
                                            <strong>Rejected:</strong> {data.statusCounts.rejected}
                                        </p>

                                        <h3>Status Breakdown by Institution Type</h3>
                                        <ul>
                                            {data.categoryBreakdown.institutions.map(
                                                (institution, index) => (
                                                    <li key={index}>
                                                        {institution.type}: {institution.count} documents
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-6 right_section_2'>
                                    <img src={`${process.env.PUBLIC_URL}/eval_1.png`} alt="evaluation image" className="Eval_Image" style={{width:'30rem', height:'15rem'}}/>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='col-md-6 left_section_3'>
                                <img src={`${process.env.PUBLIC_URL}/eval_2.jpg`} alt="evaluation image" className="Eval_Image" style={{width:'30rem', height:'20rem'}}/>
                                </div>
                                <div className='col-md-6 right_section_3'>
                                    <div className="document-review-history">
                                        <h2>Document Review History</h2>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Evaluator</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.documentReviewHistory.map((review, index) => (
                                                    <tr key={index}>
                                                        <td>{review.evaluator}</td>
                                                        <td>{review.date}</td>
                                                        <td>{review.status}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                            <div className='row'>
                                <div className="contact-us mb-3 mt-5">
                                    <h2>Contact Us</h2>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="name">Name:</label>
                                            <input type="text" id="name" name="name" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email:</label>
                                            <input type="email" id="email" name="email" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="query">Your Query:</label>
                                            <textarea id="query" name="query" rows="3" required></textarea>
                                        </div>
                                        <button type="submit" className='contact-btn'>Submit</button>
                                    </form>
                                </div>
                            </div>
                            </>)}

                    {modalSet === 'college' && (<>
                        <div className='row'>
                            <div className='col-md-6 left_section_4'>
                                <div className="feedback-issues">
                                    <h2>Feedback and Issues</h2>
                                    <h3>Outstanding Issues:</h3>
                                    <ul>
                                        {data.outstandingIssues.map((issue, index) => (
                                            <li key={index}>{issue}</li>
                                        ))}
                                    </ul>
                                    <h3>Common Reasons for Document Rejections:</h3>
                                    <ul>
                                        {data.rejectionReasons.map((reason, index) => (
                                            <li key={index}>{reason}</li>
                                        ))}
                                    </ul>
                                    <h3>Feedback from Evaluators:</h3>
                                    <ul>
                                        {data.feedback.map((feedback, index) => (
                                            <li key={index}>{feedback}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className='col-md-6 right_section_4'>
                            <img src={`${process.env.PUBLIC_URL}/clg_1.jpg`} alt="evaluation image" className="Eval_Image" style={{width:'30rem', height:'15rem', mixBlendMode:'inherit'}}/>
                            </div>
                        </div>
                            </>
                        )}
                        </div>
                        {modalSet === 'college' && (
                        <div className="modal fade" id="collegeModal" tabIndex="-1" aria-labelledby="collegeModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="collegeModalLabel">Update College Profile</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className="mb-3">
                                                        <label htmlhtmlFor="collegeName" className="form-label">College Name</label>
                                                        <input type="text" className="form-control" id="collegeName" placeholder="Enter College Name" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlhtmlFor="institutionType" className="form-label">Institution Type</label>
                                                        <input type="text" className="form-control" id="institutionType" placeholder="Enter Institution Type" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlhtmlFor="approvalYear" className="form-label">AICTE Approval Year</label>
                                                        <input type="text" className="form-control" id="approvalYear" placeholder="Enter AICTE Approval Year" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlhtmlFor="address" className="form-label">Address</label>
                                                        <textarea className="form-control" id="address" rows="4" placeholder="Enter Address"></textarea>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="mb-3">
                                                        <label htmlhtmlFor="universityName" className="form-label">University Name</label>
                                                        <input type="text" className="form-control" id="universityName" placeholder="Enter University Name" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlhtmlFor="approvalNo" className="form-label">AICTE Approval No</label>
                                                        <input type="text" className="form-control" id="approvalNo" placeholder="Enter AICTE Approval No" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlhtmlFor="nbaAccreditations" className="form-label">NBA Accreditations</label>
                                                        <input type="text" className="form-control" id="nbaAccreditations" placeholder="Enter NBA Accreditations" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlhtmlFor="email" className="form-label">Email</label>
                                                        <input type="email" className="form-control" id="email" placeholder="Enter Email" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlhtmlFor="coursesOffered" className="form-label">Courses Offered:</label>
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
                        </div>
                    )}

                    {modalSet === 'evaluator' && (
                        <div className="modal fade" id="evaluatorModal" tabIndex="-1" aria-labelledby="evaluatorModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="evaluatorModalLabel">Evaluator Profile</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className="mb-3">
                                                        <label htmlhtmlFor="evaluatorId" className="form-label">Evaluator Id:</label>
                                                        <input type="text" className="form-control" id="evaluatorId" placeholder="Enter Evaluator Id" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlhtmlFor="designation" className="form-label">Designation</label>
                                                        <input type="text" className="form-control" id="designation" placeholder="Enter Designation" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlhtmlFor="expertiseArea" className="form-label">Expertise Area</label>
                                                        <input type="text" className="form-control" id="expertiseArea" placeholder="Enter Expertise Area" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlhtmlFor="assignedColleges" className="form-label">Assigned Colleges:</label>
                                                        <select multiple className="form-control" id="assignedColleges" required disabled>
                                                            <option value="college1">College 1</option>
                                                            <option value="college2">College 2</option>
                                                            <option value="college3">College 3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="mb-3">
                                                        <label htmlhtmlFor="evaluatorName" className="form-label">Evaluator Name</label>
                                                        <input type="text" className="form-control" id="evaluatorName" placeholder="Enter Evaluator Name" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlhtmlFor="organization" className="form-label">Organization:</label>
                                                        <input type="text" className="form-control" id="organization" placeholder="Enter Organization Name" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlhtmlFor="evaluationOffered" className="form-label">Evaluation Offered:</label>
                                                        <input type="text" className="form-control" id="evaluationOffered" placeholder="Enter Evaluation Offered" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlhtmlFor="assignedRegion" className="form-label">Assigned Region</label>
                                                        <select multiple className="form-control" id="assignedRegion" required disabled>
                                                            <option value="region1">District 1</option>
                                                            <option value="region2">District 2</option>
                                                            <option value="region3">District 3</option>
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
                    )}
                </div>
            </div>
        </>
    );
}

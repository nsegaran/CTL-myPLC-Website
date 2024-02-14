import React from 'react';
import './Categories.css'; // Make sure to create a Categories.css file for styling

const Categories = () => {
  return (
    <div className="categories-container">
      <div className="category">
        <h3>General PLC Information</h3>
        <div className="subcategory">
          Contact Info & Nomenclature
          <ul>
            <li><a href="https://docs.google.com/spreadsheets/d/1kbxAk_cXwehrUXz3iz5WM5m-kDdxqzo5-tfeR6Bqw8Q/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Contact Information</a></li>
            <li><a href="https://docs.google.com/spreadsheets/d/1NHiQJMek2tBwm98ROKeUMCQRExlHLNNmnJ3ZnXAZYgY/edit?usp=share_link" target="_blank" rel="noopener noreferrer">PLC Nomenclature</a></li>
          </ul>
        </div>
        <div className="subcategory">
          Training Materials & Onboarding
          <ul>
            <li><a href="https://docs.google.com/presentation/d/1Vl1U8cUQpn4HNHgcVIR3sZJ-rNuDr6qF4l_d7E5nSaQ/edit?usp=share_link" target="_blank" rel="noopener noreferrer">New PLC Onboarding Slides</a></li>
            <li><a href="https://docs.google.com/document/d/1S-xizqpEbdirFMmRyxgZ-19boVRpJmsVbg2U5UhG4Tc/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Time Card Guidelines</a></li>
            <li><a href="https://docs.google.com/document/d/1Qou5g_BSE6iO01zVrYOrDNde6HINVBDmcTVVPIool5Y/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Do's and Don'ts for Interacting with Students</a></li>
          </ul>
        </div>
        <div className="subcategory">
          Guidelines & Resources for Working at the CTL
          <ul>
            <li><a href="https://docs.google.com/document/d/1D5lFsB_PVPlYcz_kI4I5v9KsdTbQuSa-hKZA6Mc9PcQ/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Norms & Values</a></li>
            <li><a href="https://docs.google.com/document/d/1PCToNWvFvhWcHF9nxKoUF6BzTbooVBmjKU-4wYHc6tM/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Undergraduate Campus Resources Quick Sheet</a></li>
            <li><a href="https://docs.google.com/document/d/11JtO0ds3-83oti69Z6vAvaYRfN-B3WeRf0TMztedphI/edit?usp=share_link" target="_blank" rel="noopener noreferrer">An Incomprehensive List of Stanford-Affiliated Community Partners</a></li>
          </ul>
        </div>
        <div className="subcategory">
          Miscellaneous
          <ul>
            <li><a href="https://docs.google.com/spreadsheets/d/1gH4CTuSxjaNiL7giZ2P4vAcXd55iuN_fAZjsc74Vdio/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Programming Tracker</a></li>
            <li><a href="https://docs.google.com/spreadsheets/d/1XQbqRqeSpESKJVtNABoQqdOVOuGyDeaowadH5PG_Jvw/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Summer PLC Status sheet</a></li>
          </ul>
        </div>
      </div>
      <div className="category">
  <h3>Academic Materials Content</h3>
  <div className="subcategory">
    General
    <ul>
      <li><a href="https://docs.google.com/document/d/1R48ybWWWbqXhOchjZIpX0DPdy9EQoWI4r-kRm9KqYiU/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Workshop, Study Hall, Studio Workflow/Checklist</a></li>
      <li><a href="https://docs.google.com/document/d/1ux0tWsRky_3zQQ5G2-nm6zsp0nb_VtwOLa0Q6gu-bMU/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Zoom Session Guidelines</a></li>
      <li><a href="https://docs.google.com/document/d/1PCvkrVlE_-FZMKwSvVHOE-ecHBI7ZBjz4LHJJHOb8jQ/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Description Bank - Workshops & Studios</a></li>
    </ul>
  </div>
  <div className="subcategory">
    Study Halls
    <ul>
      <li><a href="https://docs.google.com/spreadsheets/d/1qETCE8UmgNN5btWS4ptNldBsqRzeIhMQF0FzCCoWjEE/edit?usp=share_link" target="_blank" rel="noopener noreferrer">2023-2024 Study Halls</a></li>
      <li><a href="https://docs.google.com/presentation/d/1dNEQ86MyGZzuLRHCo5xeScPcYebfqmTLNnWp30fPr6M/edit?usp=share_link" target="_blank" rel="noopener noreferrer">In-Person Study Hall Slides</a></li>
      <li><a href="https://docs.google.com/document/d/1jKSocSP0Vy9ELsP3STCx0_5Na1YTWXNJXeLA-wsBsKE/edit?usp=share_link" target="_blank" rel="noopener noreferrer">SMART Goal Setting</a></li>
      <li><a href="https://docs.google.com/document/d/1ycxSZWVJGzYLo7Lzmr0plCWr7Wwj70K_nvxXK6x0sYc/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Study Hall Checklist</a></li>
    </ul>
  </div>
  <div className="subcategory">
    Workshop Materials
    <ul>
      <li><a href="https://docs.google.com/spreadsheets/d/1os14P4YAnd9k2ms3exYqUHXVsbj8GYFZCkL9sGEAs0M/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Curriculum Design Inventory</a></li>
    </ul>
  </div>
  <div className="subcategory">
    Content Creation Guidelines
    <ul>
      <li><a href="https://docs.google.com/document/d/13xuNPJahVtsJ60c69BtD-u3c_EbfjOBCIVyo9AAQg4Y/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Creating Content for a Handout</a></li>
      <li><a href="https://docs.google.com/document/d/10KLjARjqrobeExFAhNeunlx7RDCa9FFvucsjXiEyhC4/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Writing an Article or Blog Post</a></li>
    </ul>
  </div>
</div>

<div className="category">
  <h3>Peer Academic Coaching</h3>
  <div className="subcategory">
    Specific Guidelines & Resources
    <ul>
      <li><a href="https://docs.google.com/document/d/1wwSXVvHCGvGY6Pb3smexH0D4yqV0IxNGDTv3SX8gHRs/edit?usp=share_link" target="_blank" rel="noopener noreferrer">2023-2024 PAC Handbook</a></li>
        </ul>
  </div>
  <div className="subcategory">
    Templates
    <ul>
    <li><a href="https://docs.google.com/document/d/1o24yIhWW-3KXGuBfusQJZ9CniPA_BC9PlQqHedTKTxg/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Completion Coaching TEMPLATE: Assignment Details & Action Plan</a></li>
        <li><a href="https://docs.google.com/document/d/1F9NCzs_54AYte7FV6hJIWHHySRMzkHzv7yrxDP-Oa9E/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Completion Coaching TEMPLATE: Assignments Overview</a></li>
        <li><a href="https://docs.google.com/document/d/110eFDpPtujycXtdbsC1L4_foPjT32Yb7sAedIaWnVnk/edit?usp=share_link" target="_blank" rel="noopener noreferrer">E-Mail Templates</a></li>
        <li><a href="https://docs.google.com/document/d/1am3X99Z3xZn3HuZyZJRB7sqDOOYZPHBN0Dd6ReW4OXw/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Coaching Template - ADHD/LD Support Program</a></li>
      </ul>
  </div>
  <div className="subcategory">
    Specific Training
    <ul>
      <li><a href="https://canvas.stanford.edu/courses/176220" target="_blank" rel="noopener noreferrer">Peer Academic Coaching Training Canvas</a></li>
      <li><a href="https://docs.google.com/document/d/1JznL13r3jAaoKWLfSCnhxGGyplcLOs_iu-lZG3PCNB0/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Common Academic Coaching Questions</a></li>
    </ul>
  </div>
  <div className="subcategory">
    Current Quarter Materials
    <ul>
      <li><a href="https://docs.google.com/spreadsheets/d/1DfDr90Lrwv9EzP6L6Wn2kldXWaNB76BuR8k-BrXsdDE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Fall 2023 PAC Quarter at a Glance</a></li>
      <li><a href="https://docs.google.com/document/d/1lOntlpBbYBYZ35HFYR_2dQ8S2LBDgq9PviOHz7kwaJA/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Friday Afternoon & Quarterly Checklist (2023 - 2024)</a></li>
      <li><a href="https://docs.google.com/document/d/1okd8qPB23-NGCf3Gk-1fPdTSl7GNs_Z9DA8XhXaCRXM/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Peer Academic Coach Feedback Form</a></li>
    </ul>
  </div>
</div>

<div className="category">
  <h3>Curriculum Design</h3>
  <div className="subcategory">
    Specific Guidelines & Resources
    <ul>
      <li><a href="https://docs.google.com/document/d/1dR7vqjGXr7_Ci6B4XbEAx9E_TbMHQOPq0eOtDdYiou8/edit?usp=share_link" target="_blank" rel="noopener noreferrer">2023-2024 CD PLC Handbook</a></li>
      <li><a href="https://drive.google.com/drive/folders/1JZCp3-I2knCV6qRkPSe_uXFaKs05vKEi?usp=share_link" target="_blank" rel="noopener noreferrer">Templates</a></li>
        <li><a href="https://docs.google.com/spreadsheets/d/1os14P4YAnd9k2ms3exYqUHXVsbj8GYFZCkL9sGEAs0M/edit?usp=sharing" target="_blank" rel="noopener noreferrer">CD Inventory</a></li>
        <li><a href="https://docs.google.com/spreadsheets/d/1S8Qu6_pAY68R65wowIoE2ls9hs2yYlNBs6IcvRDDZ0E/edit?usp=sharing" target="_blank" rel="noopener noreferrer">CD Feedback Rotations</a></li>
        <li><a href="https://docs.google.com/spreadsheets/d/11oeK0ZiNXnLhPfvPFqRN06FxiUIvvWfpAgeReP_9NVs/edit?usp=sharing" target="_blank" rel="noopener noreferrer">CD Project Tracker</a></li>
    </ul>
  </div>
  <div className="subcategory">
    Specific Training
    <ul>
      <li><a href="https://docs.google.com/document/d/1n_ayxnCrNHL56lFcseVvQCwWFKdfiSyPyZ3AJhyLuTQ/edit?usp=share_link" target="_blank" rel="noopener noreferrer">[Syllabus] Curriculum Design Training</a></li>
      <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSc0Fv0wiUDWYcXL5NOiVudOKn-7EabMdWHhWOd9mmRhk2d4pw/viewform?usp=share_link" target="_blank" rel="noopener noreferrer">CD Training Feedback Link</a></li>
      <li><a href="https://drive.google.com/drive/folders/1ZPCqBSiJ61tqiZ4NMfxup11Ktq74TMqo?usp=share_link" target="_blank" rel="noopener noreferrer">Training Modules</a></li>
    </ul>
  </div>
  <div className="subcategory">
    Current Quarter Materials
    <ul>
      <li><a href="https://docs.google.com/document/d/13MfE1zHr0K-rSNpoxi82N_Emzg-EU6bP2w9XBXGluQc/edit?usp=share_link" target="_blank" rel="noopener noreferrer">[Agenda] AY 2023-2024</a></li>
    </ul>
  </div>
</div>

<div className="category">
  <h3>Program Coordinators</h3>
  <div className="subcategory">
    Specific Guidelines & Resources
    <ul>
      <li><a href="https://docs.google.com/document/d/1WajwYZCIuOsVTup9hmmFa4IRbuHJhePsp29oPFoh-wE/edit?usp=share_link" target="_blank" rel="noopener noreferrer">ProCo Handbook</a></li>
      <li><a href="https://docs.google.com/document/d/1gOE81tfMopsUQohwf8D2AGoqbNT1NOJyz7Aws-VjAio/edit?usp=sharing" target="_blank" rel="noopener noreferrer">CD ProCo Handbook</a></li>
      <li><a href="https://docs.google.com/document/d/1PCvkrVlE_-FZMKwSvVHOE-ecHBI7ZBjz4LHJJHOb8jQ/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Description Bank</a></li>
      <li><a href="https://docs.google.com/spreadsheets/d/1XJWuVI490mP7N-oaaEmZQPK2AlFVMjJ7Mocw1IF8Cj8/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Academic Skills Tips Bank</a></li>
    </ul>
  </div>
  <div className="subcategory">
    Current Quarter Materials
    <ul>
      <li><a href="https://docs.google.com/spreadsheets/d/18J6J8KPbhPiIur6YstASMZAssG-qlk3pkelYiDd6ovo/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Master Programming Spreadsheet</a></li>
    </ul>
  </div>
</div>


<div className="category">
  <h3>Communications Team</h3>
  <div className="subcategory">
    Specific Guidelines & Resources
    <ul>
      <li><a href="https://docs.google.com/document/d/13mEXLzgytT3giX9Hf5vULX7mnycxLRjkQ2EnfzGTKsg/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Academic Skills Newsletter - Training Doc</a></li>
      <li><a href="https://docs.google.com/presentation/d/1-Tt0p1CIRYUkUsGOFF1J8JNHJyC5F8auV0bzfpp5VR8/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Presentation Template</a></li>
    </ul>
  </div>
  <div className="subcategory">
    Current Quarter Materials
    <ul>
    <li><a href="https://docs.google.com/document/d/1z4wKJreehOI29TBBkrPGdyyO-y1HixbwNpdJxtWcN2A/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Academic Skills Newsletter - Autumn ‘23 Content Planner</a></li>
    
      <li><a href="https://docs.google.com/document/d/1hCSaVXbbu2U9CyGAECr7VdmdIuGfFrwcsbMHybkZL3o/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Communications Division Goals (AY 2023-2024)</a></li>
    </ul>
  </div>
</div>

      <div className="category">
  <h3>Strategy and Ops</h3>
  <div className="subcategory">
    Specific Guidelines & Resources
    <ul>
      <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfVscQSNjFVItkJBSzJ3FjGTnMFZRoyQlPUUbiThmgJG-Ka_A/viewform?usp=share_link" target="_blank" rel="noopener noreferrer">S&O General Member Info Form</a></li>
    </ul>
  </div>
  <div className="subcategory">
    Current Quarter Materials
    <ul>
      <li><a href="https://docs.google.com/document/d/1xgEhI5ny_QeZtIl-WjGylvPlqjQfVJmfwNcXCYRd5vc/edit?usp=share_link" target="_blank" rel="noopener noreferrer">Meeting Notes</a></li>
    </ul>
  </div>
</div>

      <div className="category">
  <h3>Engineering Learning Consultant Team</h3>
  <div className="subcategory">
    Current Quarter Materials
    <ul>
      <li><a href="https://docs.google.com/document/d/1_o70oD58t17fKuNKFnuLaG5gNZN9gSy-x0LdSZBhGgc/edit?usp=share_link" target="_blank" rel="noopener noreferrer">ELC AY2023-2024 Plan</a></li>
    </ul>
  </div>
</div>

<div className="category">
  <h3></h3>
</div>

    </div>

  );
}

export default Categories;

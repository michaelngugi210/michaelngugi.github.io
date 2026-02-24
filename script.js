// Demo roles data with estimated monthly pay (KES)
const roles = [
  // Store & Frontline
  {
    title: "Store Attendant",
    location: "Nairobi",
    department: "Store",
    type: "Full-time",
    salary: "KES 18,000 – 22,000",
    description: "Assist customers, manage shelves, and ensure store cleanliness."
  },
  {
    title: "Cashier",
    location: "Nairobi",
    department: "Store",
    type: "Full-time",
    salary: "KES 20,000 – 24,000",
    description: "Handle customer checkouts, payments, and receipts accurately."
  },
  {
    title: "Senior Store Supervisor",
    location: "Nairobi",
    department: "Store",
    type: "Full-time",
    salary: "KES 24,000 – 28,000",
    description: "Lead store teams, manage shifts, and ensure branch targets are met."
  },
  {
    title: "Branch Manager",
    location: "Mombasa",
    department: "Store",
    type: "Full-time",
    salary: "KES 26,000 – 30,000",
    description: "Oversee day-to-day branch operations, staff, and customer satisfaction."
  },

  // Logistics & Warehouse
  {
    title: "Inventory Clerk",
    location: "Mombasa",
    department: "Logistics",
    type: "Full-time",
    salary: "KES 22,000 – 26,000",
    description: "Monitor stock levels and support deliveries and stock counts."
  },
  {
    title: "Driver",
    location: "Kisumu",
    department: "Logistics",
    type: "Contract",
    salary: "KES 22,000 – 28,000",
    description: "Deliver goods between branches and warehouses safely and on time."
  },
  {
    title: "Warehouse Assistant",
    location: "Nairobi",
    department: "Logistics",
    type: "Full-time",
    salary: "KES 20,000 – 24,000",
    description: "Support loading, offloading, and arranging stock in the warehouse."
  },
  {
    title: "Fleet & Logistics Coordinator",
    location: "Nairobi",
    department: "Logistics",
    type: "Full-time",
    salary: "KES 24,000 – 30,000",
    description: "Plan routes, track deliveries, and coordinate drivers and vehicles."
  },

  // Head Office – HR, Finance, IT, Marketing
  {
    title: "HR Assistant",
    location: "Nairobi",
    department: "Head Office",
    type: "Full-time",
    salary: "KES 22,000 – 26,000",
    description: "Support recruitment, onboarding, and employee records."
  },
  {
    title: "HR Business Partner",
    location: "Nairobi",
    department: "Head Office",
    type: "Full-time",
    salary: "KES 26,000 – 30,000",
    description: "Work with regional managers to support people strategy and performance."
  },
  {
    title: "Accountant",
    location: "Nairobi",
    department: "Head Office",
    type: "Full-time",
    salary: "KES 24,000 – 30,000",
    description: "Prepare financial reports, reconcile accounts, and support audits."
  },
  {
    title: "Finance Intern",
    location: "Nairobi",
    department: "Head Office",
    type: "Internship",
    salary: "KES 12,000 – 16,000",
    description: "Support basic finance tasks and learn retail accounting processes."
  },
  {
    title: "IT Support Technician",
    location: "Nairobi",
    department: "IT",
    type: "Full-time",
    salary: "KES 22,000 – 28,000",
    description: "Support POS systems, networks, and end-user devices in branches."
  },
  {
    title: "Systems Administrator",
    location: "Nairobi",
    department: "IT",
    type: "Full-time",
    salary: "KES 24,000 – 30,000",
    description: "Manage servers, backups, and core systems that power operations."
  },
  {
    title: "Digital Marketing Executive",
    location: "Nairobi",
    department: "Marketing",
    type: "Full-time",
    salary: "KES 22,000 – 28,000",
    description: "Run campaigns, social media, and digital promotions for the brand."
  },
  {
    title: "Graphic Designer",
    location: "Nairobi",
    department: "Marketing",
    type: "Full-time",
    salary: "KES 20,000 – 26,000",
    description: "Create artwork for in-store posters, flyers, and online campaigns."
  },

  // Security, Maintenance, Customer Care
  {
    title: "Security Guard",
    location: "Kisumu",
    department: "Security",
    type: "Full-time",
    salary: "KES 18,000 – 22,000",
    description: "Ensure safety of customers, staff, and store property."
  },
  {
    title: "CCTV Operator",
    location: "Nairobi",
    department: "Security",
    type: "Full-time",
    salary: "KES 22,000 – 28,000",
    description: "Monitor surveillance systems and report incidents in real time."
  },
  {
    title: "Maintenance Technician",
    location: "Nairobi",
    department: "Maintenance",
    type: "Full-time",
    salary: "KES 22,000 – 28,000",
    description: "Repair and maintain store equipment, fixtures, and utilities."
  },
  {
    title: "Customer Care Representative",
    location: "Nairobi",
    department: "Customer Care",
    type: "Full-time",
    salary: "KES 20,000 – 26,000",
    description: "Handle customer inquiries and feedback via phone and email."
  },

  // Support functions
  {
    title: "Procurement Officer",
    location: "Nairobi",
    department: "Procurement",
    type: "Full-time",
    salary: "KES 24,000 – 30,000",
    description: "Source suppliers, negotiate prices, and ensure timely stock deliveries."
  },
  {
    title: "Data Analyst",
    location: "Nairobi",
    department: "Analytics",
    type: "Full-time",
    salary: "KES 24,000 – 30,000",
    description: "Analyse sales and inventory data to support business decisions."
  },
  {
    title: "Cleaner",
    location: "Mombasa",
    department: "Store",
    type: "Part-time",
    salary: "KES 15,000 – 20,000",
    description: "Maintain high standards of hygiene inside and outside the store."
  }
];

function renderRoles() {
  const rolesList = document.getElementById("rolesList");
  const locationFilter = document.getElementById("locationFilter").value;
  const departmentFilter = document.getElementById("departmentFilter").value;

  rolesList.innerHTML = "";

  const filtered = roles.filter((role) => {
    const matchLocation =
      locationFilter === "all" || role.location === locationFilter;
    const matchDept =
      departmentFilter === "all" || role.department === departmentFilter;
    return matchLocation && matchDept;
  });

  if (filtered.length === 0) {
    rolesList.innerHTML =
      '<p style="color:#9ca3af;font-size:0.9rem;">No roles match your filters right now. Try a different location or department.</p>';
    return;
  }

  filtered.forEach((role) => {
    const card = document.createElement("article");
    card.className = "role-card";

    card.innerHTML = `
      <div class="role-title">${role.title}</div>
      <div class="role-meta">
        <span class="role-pill">${role.location}</span>
        <span class="role-pill">${role.department}</span>
        <span class="role-pill">${role.type}</span>
      </div>
      <p class="role-desc">${role.description}</p>
      <p class="role-salary">${role.salary || "Competitive salary (details during interview)"}</p>
      <button class="btn ghost" type="button">Apply for this role</button>
    `;

    const btn = card.querySelector("button");
    btn.addEventListener("click", () => {
      scrollToApply(role.title);
    });

    rolesList.appendChild(card);
  });
}

function scrollToApply(roleName) {
  const roleInput = document.getElementById("role");
  const applySection = document.getElementById("apply");

  if (roleInput) {
    roleInput.value = roleName;
  }

  if (applySection) {
    applySection.scrollIntoView({ behavior: "smooth" });
  }
}

function setupFilters() {
  const locationFilter = document.getElementById("locationFilter");
  const departmentFilter = document.getElementById("departmentFilter");

  if (locationFilter) {
    locationFilter.addEventListener("change", renderRoles);
  }
  if (departmentFilter) {
    departmentFilter.addEventListener("change", renderRoles);
  }
}

function setupForm() {
  const form = document.getElementById("applicationForm");
  const messageEl = document.getElementById("formMessage");
  const PAYSTACK_URL = "https://paystack.shop/pay/-golfro0wy";

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = form.fullName.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const preferredLocation = form.preferredLocation.value.trim();
    const role = form.role.value.trim();

    if (!fullName || !phone || !email || !preferredLocation || !role) {
      messageEl.textContent = "Please fill in all required fields.";
      messageEl.className = "form-message error";
      return;
    }

    // Simulate successful submission
    console.log("Application submitted:", {
      fullName,
      phone,
      email,
      preferredLocation,
      role,
      experience: form.experience.value.trim()
    });

    messageEl.textContent =
      "Thank you! Your application has been received. You will now be redirected to complete payment.";
    messageEl.className = "form-message success";

    form.reset();

    // Open Paystack payment page in a new tab
    window.open(PAYSTACK_URL, "_blank");
  });
}

function setYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  setupFilters();
  setupForm();
  renderRoles();
});


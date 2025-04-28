let HeaderHTML = `
<div class="w-100 primary_bg z-3">
    <!-- Desktop Navbar -->
    <nav class="navbar navbar-expand-lg d-none d-lg-block">
        <div class="container-fluid section_contaier">
            <a class="navbar-brand" href="/index.html">
                <img src="/assets/images/Logo_ProcureClix.png" class="w_150" alt="ProcureClix Logo">
            </a>
            <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul class="navbar-nav justify-content-center gap-2 w-100 mb-2 mb-lg-0" id="navbarNav">
                    <li class="nav-item">
                        <div class="dropdown">
                            <a class="nav-link" href="/index.html">Home</a>
                        </div>
                    </li>

                    <li class="nav-item position-relative">
                        <div class="dropdown">
                            <a class="nav-link dropdown-toggle" href="/services/index.html"
                                data-bs-toggle="dropdown">Services</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/services/spend_analysis.html">Spend Analysis</a>
                                </li>
                                <li><a class="dropdown-item" href="/services/managed_rfx_rfq_rfp.html">Managed RFX | RFQ
                                        | RFP</a></li>
                                <li><a class="dropdown-item" href="/services/managed_reverse_auctions.html">Managed
                                        Reverse Auctions</a></li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item position-relative">
                        <div class="dropdown">
                            <a class="nav-link dropdown-toggle" href="/industries/index.html"
                                data-bs-toggle="dropdown">Industries</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/industries/logistics.html">Logistics</a></li>
                                <li><a class="dropdown-item" href="/industries/healthcare.html">Healthcare</a></li>
                                <li><a class="dropdown-item" href="/industries/automotive.html">Automotive</a></li>
                                <li><a class="dropdown-item" href="/industries/manufacturing.html">Manufacturing</a>
                                </li>
                                <li><a class="dropdown-item" href="/industries/food_beverage.html">Food & Beverage</a>
                                </li>
                                <li><a class="dropdown-item" href="/industries/biotech_pharma.html">BioTech and
                                        Pharma</a></li>
                                <li><a class="dropdown-item" href="/industries/energy_brokers.html">Energy Brokers and
                                        Suppliers</a></li>
                                <li><a class="dropdown-item"
                                        href="/industries/construction_real_estate.html">Construction & Real Estate</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item position-relative">
                        <div class="dropdown">
                            <a class="nav-link dropdown-toggle" href="/solutions/index.html"
                                data-bs-toggle="dropdown">Solutions</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/solutions/rfp_rfi_rfq.html">RFP | RFI | RFQ</a></li>
                                <li><a class="dropdown-item" href="/solutions/spend_analysis.html">Spend Analysis</a>
                                </li>
                                <li><a class="dropdown-item" href="/solutions/reverse_auction.html">Reverse Auction</a>
                                </li>
                                <li><a class="dropdown-item" href="/solutions/custom_solutions.html">Custom
                                        Solutions</a></li>
                                <li><a class="dropdown-item" href="/solutions/purchase_requisition.html">Purchase
                                        Requisition</a></li>
                                <li><a class="dropdown-item" href="/solutions/supplier_management.html">Supplier
                                        Management</a></li>
                                <li><a class="dropdown-item" href="/solutions/contract_management.html">Contract
                                        Management</a></li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item position-relative">
                        <div class="dropdown">
                            <a class="nav-link dropdown-toggle" href="/resources/index.html"
                                data-bs-toggle="dropdown">Resources</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/resources/blog.html">Blog</a></li>
                                <li><a class="dropdown-item" href="/resources/insights.html">Insights</a></li>
                                <li><a class="dropdown-item" href="/resources/integration.html">Integration</a></li>
                                <li><a class="dropdown-item" href="/resources/whitepapers.html">Whitepapers</a></li>
                                <li><a class="dropdown-item" href="/resources/case_studies.html">Case Studies</a></li>
                                <li><a class="dropdown-item" href="/resources/analyst_reports.html">Analyst Reports</a>
                                </li>
                                <li><a class="dropdown-item" href="/resources/procurement_guide.html">Procurement
                                        Guide</a></li>
                                <li><a class="dropdown-item" href="/resources/procurement_glossary.html">Procurement
                                        Glossary</a></li>
                                <li><a class="dropdown-item" href="/resources/procurement_conferences.html">Procurement
                                        Conferences</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <div class="d-flex gap-3">
                    <a href="/comingsoon/index.html" class="btn btn-outline-light wite_border_btn"><span>Contact
                            Us</span></a>
                    <div class="col-auto">
                        <a href="/comingsoon/index.html" class="btn btn-light white_bg_btn demo_btn"><span>Schedule a
                                Demo</span></a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Mobile Navbar -->
    <div class="container-fluid d-block d-lg-none">
        <div class="d-flex justify-content-between align-items-center py-2">
            <a class="navbar-brand" href="/index.html">
                <img src="/assets/images/Logo_ProcureClix.png" class="w_150" alt="">
            </a>
            <i class="bi bi-three-dots-vertical drawer_icon" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"></i>
        </div>
        <div class="offcanvas offcanvas-end drawer_menu" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-evenly w-100 mb-2 mb-lg-0" id="navbarNav">
                    <li class="nav-item"><a class="nav-link" href="/index.html">Home</a></li>

                    <li class="nav-item position-relative">
                        <div class="dropdown">
                            <button class="nav-link dropdown-toggle" type="button"
                                data-bs-toggle="dropdown">Services</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/services/spend_analysis.html">Spend Analysis</a>
                                </li>
                                <li><a class="dropdown-item" href="/services/managed_rfx_rfq_rfp.html">Managed RFX | RFQ
                                        | RFP</a></li>
                                <li><a class="dropdown-item" href="/services/managed_reverse_auctions.html">Managed
                                        Reverse Auctions</a></li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item position-relative">
                        <div class="dropdown">
                            <button class="nav-link dropdown-toggle" type="button"
                                data-bs-toggle="dropdown">Industries</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/industries/logistics.html">Logistics</a></li>
                                <li><a class="dropdown-item" href="/industries/healthcare.html">Healthcare</a></li>
                                <li><a class="dropdown-item" href="/industries/automotive.html">Automotive</a></li>
                                <li><a class="dropdown-item" href="/industries/manufacturing.html">Manufacturing</a>
                                </li>
                                <li><a class="dropdown-item" href="/industries/food_beverage.html">Food and Beverage</a>
                                </li>
                                <li><a class="dropdown-item" href="/industries/biotech_pharma.html">BioTech and
                                        Pharma</a></li>
                                <li><a class="dropdown-item" href="/industries/energy_brokers.html">Energy Brokers and
                                        Suppliers</a></li>
                                <li><a class="dropdown-item"
                                        href="/industries/construction_real_estate.html">Construction & Real Estate</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item position-relative">
                        <div class="dropdown">
                            <button class="nav-link dropdown-toggle" type="button"
                                data-bs-toggle="dropdown">Solutions</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/solutions/rfp_rfi_rfq.html">RFP | RFI | RFQ</a></li>
                                <li><a class="dropdown-item" href="/solutions/spend_analysis.html">Spend Analysis</a>
                                </li>
                                <li><a class="dropdown-item" href="/solutions/reverse_auction.html">Reverse Auction</a>
                                </li>
                                <li><a class="dropdown-item" href="/solutions/custom_solutions.html">Custom
                                        Solutions</a></li>
                                <li><a class="dropdown-item" href="/solutions/purchase_requisition.html">Purchase
                                        Requisition</a></li>
                                <li><a class="dropdown-item" href="/solutions/supplier_management.html">Supplier
                                        Management</a></li>
                                <li><a class="dropdown-item" href="/solutions/contract_management.html">Contract
                                        Management</a></li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item position-relative">
                        <div class="dropdown">
                            <button class="nav-link dropdown-toggle" type="button"
                                data-bs-toggle="dropdown">Resources</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/resources/blog.html">Blog</a></li>
                                <li><a class="dropdown-item" href="/resources/insights.html">Insights</a></li>
                                <li><a class="dropdown-item" href="/resources/integration.html">Integration</a></li>
                                <li><a class="dropdown-item" href="/resources/whitepapers.html">Whitepapers</a></li>
                                <li><a class="dropdown-item" href="/resources/case_studies.html">Case Studies</a></li>
                                <li><a class="dropdown-item" href="/resources/analyst_reports.html">Analyst Reports</a>
                                </li>
                                <li><a class="dropdown-item" href="/resources/procurement_guide.html">Procurement
                                        Guide</a></li>
                                <li><a class="dropdown-item" href="/resources/procurement_glossary.html">Procurement
                                        Glossary</a></li>
                                <li><a class="dropdown-item" href="/resources/procurement_conferences.html">Procurement
                                        Conferences</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <div class="d-flex flex-column gap-3">
                    <a href="/comingsoon/index.html" class="btn btn-outline-light wite_border_btn"><span>Contact
                            Us</span></a>
                    <div>
                        <a href="/comingsoon/index.html"
                            class="btn btn-light white_bg_btn demo_btn w-100"><span>Schedule a Demo</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`

let FooterHTML = `
 <footer class="linear_gradient_blue footer_style ">
        <!-- first footer -->
        <div class="footer_bg_image">
            <div class="spacer_60"></div>

            <div class="container-fluid section_contaier">
                <div class="position-relative z-1">
                    <div class="row justify-content-between g-4">
                        <!-- Column 1: Company -->
                        <div class="col-auto">
                            <div class="footer_menu">
                                <span class="footer_menu_title">Company</span>
                                <div class="d-flex flex-column gap-2 mt-2">
                                    <a href="/index.html" class="footer_link">Home</a>
                                    <a href="/about_us.html" class="footer_link">About Us</a>
                                    <a href="/pricing.html" class="footer_link">Pricing</a>
                                    <a href="/contact_us.html" class="footer_link">Contact Us</a>
                                </div>
                            </div>
                            <div class="mt-5">
                                <img src="/assets/images/micrisoft_azure_2.png" alt="Microsoft Azure"
                                    class="microsoft_azure">
                            </div>
                            <div class="d-flex gap-3 flex-wrap mt-2">
                                <a href="/comingsoon/index.html" class="footer_link footer_share_icon">
                                    <img src="/assets/icons/facebook_icon.png" alt="Facebook">
                                </a>
                                <a href="/comingsoon/index.html" class="footer_link footer_share_icon">
                                    <img src="/assets/icons/linkdin_icon.png" alt="LinkedIn">
                                </a>
                                <a href="/comingsoon/index.html" class="footer_link footer_share_icon">
                                    <img src="/assets/icons/x-mas_icon.png" alt="X (Twitter)">
                                </a>
                            </div>
                        </div>

                        <!-- Column 2: Services -->
                        <div class="col-auto">
                            <div class="footer_menu">
                                <span class="footer_menu_title">Services</span>
                                <div class="d-flex flex-column gap-2 mt-2">
                                    <a href="/services/spend_analysis.html" class="footer_link">Spend Analysis</a>
                                    <a href="/services/managed_rfx_rfq_rfp.html" class="footer_link">Managed RFX | RFQ
                                        | RFP</a>
                                    <a href="/services/managed_reverse_auctions.html" class="footer_link">Managed
                                        Reverse Auctions</a>
                                </div>
                            </div>
                        </div>

                        <!-- Column 3: Industries -->
                        <div class="col-auto">
                            <div class="footer_menu">
                                <span class="footer_menu_title">Industries</span>
                                <div class="d-flex flex-column gap-2 mt-2">
                                    <a href="/industries/logistics.html" class="footer_link">Logistics</a>
                                    <a href="/industries/healthcare.html" class="footer_link">Healthcare</a>
                                    <a href="/industries/automotive.html" class="footer_link">Automotive</a>
                                    <a href="/industries/manufacturing.html" class="footer_link">Manufacturing</a>
                                    <a href="/industries/food_beverage.html" class="footer_link">Food & Beverage</a>
                                    <a href="/industries/biotech_pharma.html" class="footer_link">Bio Tech And Pharma</a>
                                    <a href="/industries/energy_brokers.html" class="footer_link">Energy Brokers & Suppliers</a>
                                    <a href="/industries/construction_real_estate.html" class="footer_link">Construction & Real Estate</a>
                                </div>
                            </div>
                        </div>

                        <!-- Column 4: Solutions -->
                        <div class="col-auto">
                            <div class="footer_menu">
                                <span class="footer_menu_title">Solutions</span>
                                <div class="d-flex flex-column gap-2 mt-2">
                                <a href="/solutions/rfp_rfi_rfq.html" class="footer_link">RFP | RFI | RFQ</a>
                                <a href="/solutions/spend_analysis.html" class="footer_link">Spend Analysis</a>
                                <a href="/solutions/reverse_auction.html" class="footer_link">Reverse Auction</a>
                                <a href="/solutions/custom_solutions.html" class="footer_link">Custom Solutions</a>
                                    <a href="/solutions/purchase_requisition.html" class="footer_link">Purchase
                                        Requisition</a>
                                        <a href="/solutions/supplier_management.html" class="footer_link">Supplier
                                            Management</a>
                                    <a href="/solutions/contract_management.html" class="footer_link">Contract
                                        Management</a>
                                </div>
                            </div>
                        </div>

                        <!-- Column 5: Resources -->
                        <div class="col-auto">
                            <div class="footer_menu">
                                <span class="footer_menu_title">Resources</span>
                                <div class="d-flex flex-column gap-2 mt-2">
                                    <a href="/resources/blog.html" class="footer_link">Blog</a>
                                    <a href="/resources/insights.html" class="footer_link">Insights</a>
                                    <a href="/resources/integration.html" class="footer_link">Integration</a>                                   
                                    <a href="/resources/whitepapers.html" class="footer_link">Whitepapers</a>
                                    <a href="/resources/case_studies.html" class="footer_link">Case Studies</a>
                                    <a href="/resources/analyst_reports.html" class="footer_link">Analyst Reports</a>
                                    <a href="/resources/procurement_guide.html" class="footer_link">Procurement
                                        Guide</a>
                                    <a href="/resources/procurement_glossary.html" class="footer_link">Procurement
                                        Glossary</a>
                                    <a href="/resources/procurement_conferences.html" class="footer_link">Procurement
                                        Conferences</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="py-5">
                        <hr class="active_hr">
                    </div>

                    <div class="row pb-5">
                        <!-- mobile no. -->
                        <div class="col-12 col-sm-6 col-md-3">
                            <div class="d-flex flex-column justify-content-center gap-2 text-center">
                                <div class="footer_gradientt_circle m-auto">
                                    <img src="/assets/icons/white_phone.png" style="width: 16px; height: 24px;"
                                        loading="lazy" alt="white_phone">
                                </div>
                                <a href="tel:+18009068161" class="footer_link fs_16_fw_400_c_1313">+1 800
                                    906 8161</a>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3">
                            <!-- MAil id -->
                            <div class="d-flex flex-column justify-content-center gap-2 text-center">
                                <div class="footer_gradientt_circle m-auto">
                                    <img src="/assets/icons/white_mail_box.png" loading="lazy" alt="white_phone"
                                        style="width: 22px; height: 18px;">
                                </div>
                                <a href="mailto:sales@procureclix.com"
                                    class="footer_link fs_16_fw_400_c_1313">sales@procureclix.com</a>
                            </div>
                        </div>

                        <!-- Address -->
                        <div class="col-12 col-sm-6 col-md-3">
                            <div class="d-flex flex-column justify-content-center gap-2 text-center">
                                <div class="footer_gradientt_circle m-auto">
                                    <img src="/assets/icons/white_map_marker.png" loading="lazy" alt="white_phone"
                                        style="width: 18px; height: 24px;">
                                </div>
                                <span class="footer_link fs_16_fw_400_c_1313">8 The Green, Suite 21729 Dover, DE
                                    19901</span>
                            </div>
                        </div>

                        <!-- available country -->
                        <div class="col-12 col-sm-6 col-md-3">
                            <div class="d-flex flex-column justify-content-center gap-2 text-center">
                                <div class="footer_gradientt_circle m-auto">
                                    <img src="/assets/icons/white_glob.png" loading="lazy" alt="white_phone"
                                        style="width: 24px; height: 24px;">


                                </div>

                                <div class="d-flex justify-content-center gap-3">
                                    <a type="button" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-title="USA">
                                        <img loading="lazy" src="/assets/icons/country_icon/usa.png" alt="USA"
                                            class="w_25">
                                    </a>
                                    <a type="button" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-title="Canada">
                                        <img loading="lazy" src="/assets/icons/country_icon/canada.png" alt="Canada"
                                            class="w_25">
                                    </a>
                                    <a type="button" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-title="India">
                                        <img loading="lazy" src="/assets/icons/country_icon/india.png" alt="India"
                                            class="w_25">
                                    </a>
                                </div>


                            </div>
                        </div>

                    </div>
                    <div class="text-center pb-2 copy_write_text">
                        <span>Copyright © 2025. ProcureClix. All rights reserved</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
`;

document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("header-placeholder");
  const footerContainer = document.getElementById("footer_wrapper");

  if (headerContainer) {
    headerContainer.innerHTML = HeaderHTML;
    highlightActiveLink(); // Call after header is loaded
  }

  if (footerContainer) {
    footerContainer.innerHTML = FooterHTML;
    highlightActiveLink(); // Optional, if footer has nav
  }

  function highlightActiveLink() {
    const currentPath = window.location.pathname;
    console.log("✌️currentPath --->", currentPath);

    // Highlight nav-links
    document.querySelectorAll(".nav-link").forEach((link) => {
      const href = link.getAttribute("href");
      if (href && href === currentPath) {
        link.classList.add("active");

        const dropdown = link.closest(".dropdown");
        if (dropdown) dropdown.classList.add("active");

        const navItem = link.closest(".nav-item");
        if (navItem) navItem.classList.add("active");
      }
    });

    // Highlight dropdown-items
    document.querySelectorAll(".dropdown-item").forEach((item) => {
      const href = item.getAttribute("href");
      if (href && currentPath.includes(href)) {
        item.classList.add("active");

        const dropdown = item.closest(".dropdown");
        if (dropdown) dropdown.classList.add("active");

        const navItem = item.closest(".nav-item");
        if (navItem) navItem.classList.add("active");
      }
    });

    // Highlight dropdown-items
    document.querySelectorAll(".footer_link").forEach((item) => {
      const href = item.getAttribute("href");
      console.log("✌️href --->", href);
      if (href && currentPath === href) {
        item.classList.add("active");
      }
    });
  }
});

let HeaderHTML = `
<div class="w-100 primary_bg z-3">
    <!-- Desktop Navbar -->
    <nav class="navbar navbar-expand-lg d-none d-lg-block">
        <div class="container-fluid section_contaier">
            <a class="navbar-brand" href="/">
                <img src="/assets/images/Logo_ProcureClix.png" class="w_150" alt="ProcureClix Logo">
            </a>
            <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul class="navbar-nav justify-content-center gap-xl-2 w-100 mb-2 mb-lg-0" id="navbarNav">
                    <li class="nav-item">
                        <div class="dropdown">
                            <a class="nav-link" href="/">Home</a>
                        </div>
                    </li>

                     <li class="nav-item position-relative">
                        <div class="dropdown">
                            <a class="nav-link dropdown-toggle" href="/solutions/index.html"
                                data-bs-toggle="dropdown">Solutions</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/solutions/best-rfp-software-streamline-souring-&-supplier-selection-procureclix.html">RFP | RFI | RFQ</a></li>
                                <li><a class="dropdown-item" href="/solutions/procurement-spend-analysis-software.html">Spend Analysis</a>
                                </li>
                                <li><a class="dropdown-item" href="/solutions/best-reverse-auction-software.html">Reverse Auction</a>
                                </li>
                                <li><a class="dropdown-item" href="/solutions/custom-auction-procurement-software.html">Custom
                                        Solutions</a></li>
                                <li><a class="dropdown-item" href="/solutions/best-procure-to-pay-software-solutions.html">Procure To Pay</a></li>
                                <li><a class="dropdown-item" href="/solutions/purchase-requisition-software.html">Purchase
                                        Requisition</a></li>
                                <li><a class="dropdown-item" href="/solutions/best-supplier-management-software.html">Supplier
                                        Management</a></li>
                                <li><a class="dropdown-item" href="/solutions/procurement-contract-management-software.html">Contract
                                        Management</a></li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item position-relative">
                        <div class="dropdown">
                            <a class="nav-link dropdown-toggle" href="/industries/index.html"
                                data-bs-toggle="dropdown">Industries</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/industries/procurement-software-for-transport-logistics-industry.html">Logistics</a></li>
                                <li><a class="dropdown-item" href="/industries/procurement-software-for-healthcare-industry.html">Healthcare</a></li>
                                <li><a class="dropdown-item" href="/industries/procurement-software-for-automotive-companies.html">Automotive</a></li>
                                <li><a class="dropdown-item" href="/industries/procurement-software-for-manufacturing-industry.html">Manufacturing</a>
                                </li>
                                <li><a class="dropdown-item" href="/industries/procurement-software-for-food-beverage-industry.html">Food & Beverage</a>
                                </li>
                                <li><a class="dropdown-item" href="/industries/procurement-software-for-biotech-pharma.html">BioTech &
                                        Pharma</a></li>
                                <li><a class="dropdown-item" href="/industries/procurement-software-for-energy-brokers-suppliers.html">Energy Brokers &
                                        Suppliers</a></li>
                                <li><a class="dropdown-item"
                                        href="/industries/construction-&-real-estate-procurement-software.html">Construction & Real Estate</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item position-relative">
                        <div class="dropdown">
                            <a class="nav-link dropdown-toggle" href="/services/index.html"
                                data-bs-toggle="dropdown">Services</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/services/procurement-spend-analysis-services.html">Spend Analysis</a>
                                </li>
                                <li><a class="dropdown-item" href="/services/rfp-managed-services.html">Managed RFX | RFQ
                                        | RFP</a></li>
                                <li><a class="dropdown-item" href="/services/managed-reverse-auction-software-services.html">Managed
                                        Reverse Auctions</a></li>
                            </ul>
                        </div>
                    </li>                    
                   
                    <li class="nav-item position-relative">
                        <div class="dropdown">
                            <a class="nav-link dropdown-toggle" href="/resources/index.html"
                                data-bs-toggle="dropdown">Resources</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/blog">Blog</a></li>
                                <li><a class="dropdown-item" href="/resources/integration.html">Integration</a></li>                            
                                <li><a class="dropdown-item" href="/resources/casestudies.html">Case Studies</a></li>                        
                                <li><a class="dropdown-item" href="/resources/whitepapers.html">Whitepapers</a></li>                        
                                <li><a class="dropdown-item" href="/resources/guide.html">Procurement
                                        Guide</a></li>
                                <li><a class="dropdown-item" href="/resources/glossary.html">Procurement
                                        Glossary</a></li>
                                <li><a class="dropdown-item" href="/resources/procurement-conferences.html">Procurement
                                        Conferences</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <div class="d-flex gap-3">
                    <a href="/contact-us.html" class="btn wite_border_btn header_con_btn"><span>Contact
                            Us</span>
                    </a>
                    <div class="col-auto">
                        <a href="/contact-us.html" class="btn btn-light white_bg_btn demo_btn"><span>Schedule a
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
                <img src="/assets/images/Logo_ProcureClix.png" class="w_150" alt="Logo_ProcureClix">
            </a>
            <i class="bi bi-three-dots-vertical drawer_icon" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"></i>
        </div>
        <div class="offcanvas offcanvas-end drawer_menu" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-evenly w-100 mb-2 mb-lg-0" id="navbarNav">
                    <li class="nav-item">
                        <div class="dropdown">
                            <a class="nav-link" href="/">Home</a>
                        </div>
                    </li>

                    <li class="nav-item position-relative">
                        <div class="dropdown">
                            <button class="nav-link dropdown-toggle" type="button"
                                data-bs-toggle="dropdown">Solutions</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/solutions/best-rfp-software-streamline-souring-&-supplier-selection-procureclix.html">RFP | RFI | RFQ</a></li>
                                <li><a class="dropdown-item" href="/solutions/procurement-spend-analysis-software.html">Spend Analysis</a>
                                </li>
                                <li><a class="dropdown-item" href="/solutions/best-reverse-auction-software.html">Reverse Auction</a>
                                </li>
                                <li><a class="dropdown-item" href="/solutions/custom-auction-procurement-software.html">Custom
                                        Solutions</a></li>
                                <li><a class="dropdown-item" href="/solutions/best-procure-to-pay-software-solutions.html">Procure To Pay</a></li>
                                <li><a class="dropdown-item" href="/solutions/purchase-requisition-software.html">Purchase
                                        Requisition</a></li>
                                <li><a class="dropdown-item" href="/solutions/best-supplier-management-software.html">Supplier
                                        Management</a></li>
                                <li><a class="dropdown-item" href="/solutions/procurement-contract-management-software.html">Contract
                                        Management</a></li>
                            </ul>
                        </div>
                    </li>


                    <li class="nav-item position-relative">
                        <div class="dropdown">
                            <button class="nav-link dropdown-toggle" type="button"
                                data-bs-toggle="dropdown">Industries</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/industries/procurement-software-for-transport-logistics-industry.html">Logistics</a></li>
                                <li><a class="dropdown-item" href="/industries/procurement-software-for-healthcare-industry.html">Healthcare</a></li>
                                <li><a class="dropdown-item" href="/industries/procurement-software-for-automotive-companies.html">Automotive</a></li>
                                <li><a class="dropdown-item" href="/industries/procurement-software-for-manufacturing-industry.html">Manufacturing</a>
                                </li>
                                <li><a class="dropdown-item" href="/industries/procurement-software-for-food-beverage-industry.html">Food & Beverage</a>
                                </li>
                                <li><a class="dropdown-item" href="/industries/procurement-software-for-biotech-pharma.html">BioTech &
                                        Pharma</a></li>
                                <li><a class="dropdown-item" href="/industries/procurement-software-for-energy-brokers-suppliers.html">Energy Brokers &
                                        Suppliers</a></li>
                                <li><a class="dropdown-item"
                                        href="/industries/construction-&-real-estate-procurement-software.html">Construction & Real Estate</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    
                    <li class="nav-item position-relative">
                        <div class="dropdown">
                            <button class="nav-link dropdown-toggle" type="button"
                                data-bs-toggle="dropdown">Services</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/services/procurement-spend-analysis-services.html">Spend Analysis</a>
                                </li>
                                <li><a class="dropdown-item" href="/services/rfp-managed-services.html">Managed RFX | RFQ
                                        | RFP</a></li>
                                <li><a class="dropdown-item" href="/services/managed-reverse-auction-software-services.html">Managed
                                        Reverse Auctions</a></li>
                            </ul>
                        </div>
                    </li>


                    <li class="nav-item position-relative">
                        <div class="dropdown">
                            <button class="nav-link dropdown-toggle" type="button"
                                data-bs-toggle="dropdown">Resources</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/blog">Blog</a></li>
                                <li><a class="dropdown-item" href="/resources/integration.html">Integration</a></li>
                                <li><a class="dropdown-item" href="/resources/casestudies.html">Case Studies</a></li>
                                <li><a class="dropdown-item" href="/resources/whitepapers.html">Whitepapers</a></li>
                                <li><a class="dropdown-item" href="/resources/guide.html">Procurement
                                        Guide</a></li>
                                <li><a class="dropdown-item" href="/resources/glossary.html">Procurement
                                        Glossary</a></li>
                                <li><a class="dropdown-item" href="/resources/procurement-conferences.html">Procurement
                                        Conferences</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <div class="d-flex flex-column gap-3">
                    <a href="/contact-us.html" class="btn btn-outline-light wite_border_btn"><span>Contact
                            Us</span></a>
                    <div>
                        <a href="/contact-us.html"
                            class="btn btn-light white_bg_btn demo_btn w-100"><span>Schedule a Demo</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

let FooterHTML = `
 <footer class="linear_gradient_blue footer_style ">
        <!-- first footer -->
        <div class="footer_bg_image">
            <div class="spacer_60"></div>

            <div class="container-fluid section_contaier">
                <div class="position-relative z-1">
                    <div class="row justify-content-between g-4">
                        <!-- Column 1: Company -->
                        <div class="col-12 col-sm-auto">
                            <div class="footer_menu">
                                <span class="footer_menu_title">Company</span>
                                <div class="d-flex flex-column gap-2 mt-2">
                                    <a href="/" class="footer_link">Home</a>
                                    <a href="/about-us.html" class="footer_link">About Us</a>
                                    <a href="/procurement-software-pricing.html" class="footer_link">Pricing</a>
                                    <a href="/contact-us.html" class="footer_link">Contact Us</a>
                                </div>
                            </div>
                            <div class="d-none d-xl-block">
                                <div class="mt-5">
                                        <img src="/assets/images/micrisoft_azure_2.png" alt="Microsoft Azure"
                                            class="microsoft_azure">
                                    </div>
                                <div class="d-flex gap-3 flex-wrap mt-2">
                                    <a href="https://www.linkedin.com/company/procureclix/" target="_blank" class="footer_link footer_share_icon mt-0">
                                        <img src="/assets/icons/linkdin_icon.png" alt="LinkedIn" class="mt-0">
                                    </a>
                                    <a href="https://x.com/ProcureClix" target="_blank" class="footer_link footer_share_icon mt-0">
                                        <img src="/assets/icons/x-mas_icon.png" alt="X (Twitter)" class="mt-0">
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Column 4: Solutions -->
                        <div class="col-12 col-sm-auto">
                            <div class="footer_menu">
                                <span class="footer_menu_title">Solutions</span>
                                <div class="d-flex flex-column gap-2 mt-2">
                                <a href="/solutions/best-rfp-software-streamline-souring-&-supplier-selection-procureclix.html" class="footer_link">RFP | RFI | RFQ</a>
                                <a href="/solutions/procurement-spend-analysis-software.html" class="footer_link">Spend Analysis</a>
                                <a href="/solutions/best-reverse-auction-software.html" class="footer_link">Reverse Auction</a>
                                <a href="/solutions/custom-auction-procurement-software.html" class="footer_link">Custom Solutions</a>
                                <a class="footer_link" href="/solutions/best-procure-to-pay-software-solutions.html">Procure To Pay</a>

                                    <a href="/solutions/purchase-requisition-software.html" class="footer_link">Purchase
                                        Requisition</a>
                                        <a href="/solutions/best-supplier-management-software.html" class="footer_link">Supplier
                                            Management</a>
                                    <a href="/solutions/procurement-contract-management-software.html" class="footer_link">Contract
                                        Management</a>
                                </div>
                            </div>
                        </div>

                        <!-- Column 3: Industries -->
                        <div class="col-12 col-sm-auto">
                            <div class="footer_menu">
                                <span class="footer_menu_title">Industries</span>
                                <div class="d-flex flex-column gap-2 mt-2">
                                    <a href="/industries/procurement-software-for-transport-logistics-industry.html" class="footer_link">Logistics</a>
                                    <a href="/industries/procurement-software-for-healthcare-industry.html" class="footer_link">Healthcare</a>
                                    <a href="/industries/procurement-software-for-automotive-companies.html" class="footer_link">Automotive</a>
                                    <a href="/industries/procurement-software-for-manufacturing-industry.html" class="footer_link">Manufacturing</a>
                                    <a href="/industries/procurement-software-for-food-beverage-industry.html" class="footer_link">Food & Beverage</a>
                                    <a href="/industries/procurement-software-for-biotech-pharma.html" class="footer_link">BioTech & Pharma</a>
                                    <a href="/industries/procurement-software-for-energy-brokers-suppliers.html" class="footer_link">Energy Brokers & Suppliers</a>
                                    <a href="/industries/construction-&-real-estate-procurement-software.html" class="footer_link">Construction & Real Estate</a>
                                </div>
                            </div>
                        </div>

                        <!-- Column 2: Services -->
                        <div class="col-12 col-sm-auto">
                            <div class="footer_menu">
                                <span class="footer_menu_title">Services</span>
                                <div class="d-flex flex-column gap-2 mt-2">
                                    <a href="/services/procurement-spend-analysis-services.html" class="footer_link">Spend Analysis</a>
                                    <a href="/services/rfp-managed-services.html" class="footer_link">Managed RFX | RFQ
                                        | RFP</a>
                                    <a href="/services/managed-reverse-auction-software-services.html" class="footer_link">Managed
                                        Reverse Auctions</a>
                                </div>
                            </div>
                        </div>

                        <!-- Column 5: Resources -->
                        <div class="col-12 col-sm-auto">
                            <div class="footer_menu">
                                <span class="footer_menu_title">Resources</span>
                                <div class="d-flex flex-column gap-2 mt-2">
                                    <!-- <a href="/blog/" class="footer_link">Blog</a> -->
                                    <a href="/blog/" class="footer_link" 
                                           >Blog</a>
                                    <a href="/resources/integration.html" class="footer_link">Integration</a>
                                    <a href="/resources/casestudies.html" class="footer_link">Case Studies</a>
                                    <a href="/resources/whitepapers.html" class="footer_link">Whitepapers</a>
                                    <a href="/resources/guide.html" class="footer_link">Procurement
                                        Guide</a>
                                    <a href="/resources/glossary.html" class="footer_link">Procurement
                                        Glossary</a>
                                    <a href="/resources/procurement-conferences.html" class="footer_link">Procurement
                                        Conferences</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-auto d-xl-none">
                            <div class="">
                                <img src="/assets/images/micrisoft_azure_2.png" alt="Microsoft Azure"
                                    class="microsoft_azure">
                            </div>
                            <div class="d-flex flex-row gap-3 flex-wrap mt-2">                                
                                <a href="https://www.linkedin.com/company/procureclix/" target="_blank" class="footer_link footer_share_icon mt-0">
                                    <img src="/assets/icons/linkdin_icon.png" alt="LinkedIn">
                                </a>
                                <a href="https://x.com/ProcureClix" target="_blank" class="footer_link footer_share_icon mt-0">
                                    <img src="/assets/icons/x-mas_icon.png" alt="X (Twitter)">
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="py-5">
                        <hr class="active_hr">
                    </div>

                    <div class="row pb-5 g-5">
                        <!-- mobile no. -->
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="d-flex flex-column justify-content-center gap-2 text-center">
                                <div class="footer_gradientt_circle m-auto">
                                    <img src="/assets/icons/white_phone.png" style="width: 16px; height: 24px;"
                                        loading="lazy" alt="white_phone">
                                </div>
                                <a href="tel:+18009068161" class="footer_link fs_16_fw_400_c_1313">+1 800
                                    906 8161</a>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4">
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

                        <!-- Address 
                        <div class="col-12 col-sm-6 col-md-3">
                            <div class="d-flex flex-column justify-content-center gap-2 text-center">
                                <div class="footer_gradientt_circle m-auto">
                                    <img src="/assets/icons/white_map_marker.png" loading="lazy" alt="white_phone"
                                        style="width: 18px; height: 24px;">
                                </div>
                                <span class="footer_link fs_16_fw_400_c_1313">199 Jericho Turnpike, Suite # 201, Floral Park, NY
                                    11001</span>
                            </div>
                        </div>
-->
                        <!-- available country -->
                        <div class="col-12 col-sm-6 col-md-4">
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
    </footer><input type="hidden" id="externalSource" name="externalSource"/>
    <div class="popup-bottom-right" id="staticBackdrop" aria-hidden="true">
  <div class="popup-dialog">
    <div class="popup-content">

      <div class="popup-header">
        <h5>Connect with a specialist</h5>
        <button type="button" class="btn-close popup-close"></button>
      </div>

      <div class="popup-body">
        <div class="row gy-2">
          <div class="col-sm-12">
            <label class="form-label">First Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="popup_fName" maxlength="100">
            <div><div style="color:red;font-size:12px;margin-top:2px;" id="popup_fNameError"></div></div>
          </div>

          <div class="col-sm-12">
            <label class="form-label">Last Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="popup_lName" maxlength="100">
            <div><div style="color:red;font-size:12px;margin-top:2px;" id="popup_lNameError"></div></div>
          </div>

          <div class="col-sm-12">
            <label class="form-label">Work Email <span class="text-danger">*</span></label>
            <input type="email" class="form-control" id="popup_email">
            <div><div style="color:red;font-size:12px;margin-top:2px;" id="popup_emailError"></div></div>
          </div>
        </div>
      </div>

      <div class="popup-footer">
        <button class="btn btn_primary" onclick="submit_popup();">Submit</button>
        <button class="btn btn_secondary btn_secondary popup-close">Close</button>
      </div>

    </div>
  </div>
</div>
<div class="modal fade" id="modulesModal" tabindex="-1" aria-labelledby="modulesModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">

      <!-- Header -->
      <div class="modal-header">
        <h5 class="modal-title" id="modulesModalLabel">Modules interested in?</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" onclick="skipModulesPopup();"></button>
      </div>

      <!-- Body -->
      <div class="modal-body">
      <div id="modules_error" class="text-danger mb-3" style="display:none;"></div>
        <div class="row welcome_popup">
          <div class="col-sm-6 col-xl-4">
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" name="modules[]" value="RFP | RFI | RFQ" id="rfp">
              <label class="form-check-label" for="rfp">RFP | RFI | RFQ</label>
            </div>
          </div>

          <div class="col-sm-6 col-xl-4">
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" name="modules[]" value="Spend Analysis" id="spendAnalysis">
              <label class="form-check-label" for="spendAnalysis">Spend Analysis</label>
            </div>
          </div>

          <div class="col-sm-6 col-xl-4">
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" name="modules[]" value="Reverse Auction" id="reverseAuction">
              <label class="form-check-label" for="reverseAuction">Reverse Auction</label>
            </div>
          </div>

          <div class="col-sm-6 col-xl-4">
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" name="modules[]" value="Custom Solutions" id="customSolutions">
              <label class="form-check-label" for="customSolutions">Custom Solutions</label>
            </div>
          </div>

          <div class="col-sm-6 col-xl-4">
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" name="modules[]" value="Purchase Requisition" id="purchaseRequisition">
              <label class="form-check-label" for="purchaseRequisition">Purchase Requisition</label>
            </div>
          </div>

          <div class="col-sm-6 col-xl-4">
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" name="modules[]" value="Supplier Management" id="supplierManagement">
              <label class="form-check-label" for="supplierManagement">Supplier Management</label>
            </div>
          </div>

          <div class="col-sm-6 col-xl-4">
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" name="modules[]" value="Contract Management" id="contractManagement">
              <label class="form-check-label" for="contractManagement">Contract Management</label>
            </div>
          </div>

        </div>
      </div>

      <!-- Footer -->
      <div class="modal-footer">
        <button class="btn btn_primary" onclick="submitModulesPopup();">Submit</button>
        <button class="btn btn_secondary btn_secondary popup-close" onclick="skipModulesPopup();">Skip</button>
      </div>

    </div>
  </div>
</div>

<input type="hidden" id="popup_timezone" name="popup_timezone">
<input type="hidden" id="popup_form_loaded_at" name="formLoadedAt">
`;






window.addEventListener("load", function () {
    const pageMap = {
        "/": "Homepage",
        "/index.html": "Homepage",
        "/services/procurement-spend-analysis-services.html": "Spend Analysis",
        "/services/rfp-managed-services.html": "Managed RFX | RFQ | RFP",
        "/services/managed-reverse-auction-software-services.html":
            "Managed Reverse Auctions",
        "/industries/procurement-software-for-transport-logistics-industry.html":
            "Logistics",
        "/industries/procurement-software-for-healthcare-industry.html":
            "Healthcare",
        "/industries/procurement-software-for-automotive-companies.html":
            "Automotive",
        "/industries/procurement-software-for-manufacturing-industry.html":
            "Manufacturing",
        "/industries/procurement-software-for-food-beverage-industry.html":
            "Food & Beverage",
        "/industries/procurement-software-for-biotech-pharma.html":
            "BioTech & Pharma",
        "/industries/procurement-software-for-energy-brokers-suppliers.html":
            "Energy Brokers & Suppliers",
        "/industries/construction-&-real-estate-procurement-software.html":
            "Construction & Real Estate",
        "/solutions/best-rfp-software-streamline-souring-&-supplier-selection-procureclix.html":
            "RFP | RFI | RFQ",
        "/solutions/procurement-spend-analysis-software.html":
            "Solutions | Spend Analysis",
        "/solutions/best-reverse-auction-software.html": "Reverse Auction",
        "/solutions/custom-auction-procurement-software.html": "Custom Solutions",
        "/solutions/purchase-requisition-software.html": "Purchase Requisition",
        "/solutions/best-supplier-management-software.html": "Supplier Management",
        "/solutions/procurement-contract-management-software.html":
            "Contract Management",
        "/blog/": "Blog",
        "/resources/integration.html": "Integration",
        "/resources/guide.html": "Procurement Guide",
        "/resources/glossary.html": "Procurement Glossary",
        "/resources/procurement-conferences.html": "Procurement Conferences",
        "/about-us.html": "About Us",
        "/procurement-software-pricing.html": "Pricing",
        "/contact-us.html": "Direct",
         "/resources/whitepapers.html":"Whitepaper Page",
  "/resources/whitepapers/whitepapers-description.html":"Download Whitepaper",
    "/resources/casestudies.html":"Case Study",
  "/resources/casestudies/view-case-studies-medical-university-of-south-carolina-MUSC.html":"Case Study",
  "/resources/casestudies/view-case-studies-leading-financial.html":"Case Study",
  "/resources/casestudies/view-case-studies-leading-marketing-services.html":"Case Study",
  "/resources/casestudies/view-case-studies-leading-pharmacy.html":"Case Study",
  "/resources/casestudies/view-case-studies-leading-subsea-systems.html":"Case Study",
  "/resources/casestudies/view-case-studies-leading-services-company.html":"Case Study",
  "/resources/casestudies/housing-and-urban-development-case-study.html":"Case Study",
  "/resources/casestudies/contact-us.html":"Case Study"
    };

    var externalSource = sessionStorage.getItem("externalSource") || "";

    // Agar pehle se stored nahi hai, tab check karo
    if (!externalSource) {
        var ref = document.referrer || "";

        if (ref) {
            try {
                const url = new URL(ref);
                const path = url.pathname;
                const host = url.hostname;

                const isInternal = host.includes("procureclix.com");
                const inPageMap = !!pageMap[path];

                if (!isInternal || (!inPageMap && path !== "/")) {
                    if (ref.includes("t.co")) externalSource = "Twitter";
                    else if (ref.includes("linkedin.com")) externalSource = "LinkedIn";
                    else if (ref.includes("facebook.com")) externalSource = "Facebook";
                    else if (ref.includes("google.")) externalSource = "Google";
                    else externalSource = ref;
                } else {
                    console.log("4")
                    externalSource = "";
                }
            } catch (e) {
                externalSource = "";
            }
        } else {
             console.log("5")
            externalSource = "Direct";
        }

        // First visit se sessionStorage me store kar do
        sessionStorage.setItem("externalSource", externalSource);
    }
    console.log("externalSource=" + externalSource);
    // Input field me set kar do
    var field = document.getElementById("externalSource");
    if (field) field.value = externalSource;

    // alert("Detected source: " + externalSource);
});



function updateCopyrightYear() {
  const el = document.querySelector(".copy_write_text span");
  if (!el) return;

  el.innerHTML = el.innerHTML.replace(/\d{4}/, new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", function () {
   
    

    const headerContainer = document.getElementById("header-placeholder");
    const footerContainer = document.getElementById("footer_wrapper");
   
    if (headerContainer) {
        headerContainer.innerHTML = HeaderHTML;
        highlightActiveLink();
    }

    if (footerContainer) {
        footerContainer.innerHTML = FooterHTML;
        updateCopyrightYear();
        highlightActiveLink();
    }

    function highlightActiveLink() {
        const currentPath = window.location.pathname;

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
            if (href && currentPath.startsWith(href)) {
                item.classList.add("active");

                const dropdown = item.closest(".dropdown");
                if (dropdown) dropdown.classList.add("active");

                const navItem = item.closest(".nav-item");
                if (navItem) navItem.classList.add("active");
                return;
            }

            // active glossary
            if (
                href?.toLowerCase() === "/resources/glossary.html" &&
                currentPath.toLowerCase().includes("/resources/glossary/")
            ) {
                item.classList.add("active");

                const dropdown = item.closest(".dropdown");
                if (dropdown) dropdown.classList.add("active");

                const navItem = item.closest(".nav-item");
                if (navItem) navItem.classList.add("active");
                return;
            }

             // active glossary
            if (
                href?.toLowerCase() === "/resources/casestudies.html" &&
                currentPath.toLowerCase().includes("/resources/casestudies/")
            ) {
                item.classList.add("active");

                const dropdown = item.closest(".dropdown");
                if (dropdown) dropdown.classList.add("active");

                const navItem = item.closest(".nav-item");
                if (navItem) navItem.classList.add("active");
                return;
            }
            
            // active whitepapers
            if (
                href?.toLowerCase() === "/resources/whitepapers.html" &&
                currentPath.toLowerCase().includes("/resources/whitepapers/")
            ) {
                item.classList.add("active");

                const dropdown = item.closest(".dropdown");
                if (dropdown) dropdown.classList.add("active");

                const navItem = item.closest(".nav-item");
                if (navItem) navItem.classList.add("active");
                return;
            }
        });

        // Highlight dropdown-items
        document.querySelectorAll(".footer_link").forEach((item) => {
            const href = item.getAttribute("href");
            const currentPath = window.location.pathname;

            // Match base blog path for detail pages
            if (href && currentPath === href) {
                item.classList.add("active");
                return;
            }
            // active glossary
            if (
                href?.toLowerCase() === "/resources/glossary.html" &&
                currentPath.toLowerCase().includes("/resources/glossary/")
            ) {
                item.classList.add("active");
                return;
            }

            // active casestudies
            if (
                href?.toLowerCase() === "/resources/casestudies.html" &&
                currentPath.toLowerCase().includes("/resources/casestudies/")
            ) {
                item.classList.add("active");
                return;
            }
            // active whitepapers
            if (
                href?.toLowerCase() === "/resources/whitepapers.html" &&
                currentPath.toLowerCase().includes("/resources/whitepapers/")
            ) {
                item.classList.add("active");
                return;
            }

        });

        // Highlight Contact-us-btn
        document.querySelectorAll(".header_con_btn").forEach((item) => {
            const href = item.getAttribute("href");
            if (href && currentPath === href) {
                item.classList.add("active");
                return;
            }
            //   if(href.toLowerCase() === "/blog/    " && currentPath === "/blog/    blog-detail/"){
            //     item.classList.add("active");
            //     return;
            //   }
        });

        setTimeout(() => {
            document.documentElement.style.overflow = "auto";
        }, 1500);
    }

    // code start for welcome popup in every page

    // const welcomeContainer = document.getElementById("welcome_popup");

    // if (welcomeContainer) {
    //     welcomeContainer.innerHTML = welcomeHTML;
    // }

    // Open after 2 seconds
    setTimeout(function () {

        const currentPath = window.location.pathname;
        if (currentPath === "/contact-us.html") {
            return; 
        }

        if (sessionStorage.getItem("lead_submitted") === "true") {
             return; 
        }

        const popup = document.getElementById("staticBackdrop");
        if (popup) {
            popup.classList.add("show");
            popup.setAttribute("aria-hidden", "false");
        }
    }, 1000);

    // Close button click
    const closeButtons = document.querySelectorAll(".popup-close");
    closeButtons.forEach(function (btn) {
        btn.addEventListener("click", closePopup);
    });

    // ESC key close
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            closePopup();
        }
    });

    
    document.getElementById("popup_form_loaded_at").value = Date.now();


    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("popup_timezone").value = userTimezone;

     const popup_emailField = document.getElementById('popup_email');
        popup_emailField.addEventListener('input', () => {
       
        const email = popup_emailField.value.trim();
        if (email !== "") {
            const errorMsg = validatePopupEmail(email);
            document.getElementById('popup_emailError').innerHTML = errorMsg;
        } else {
            document.getElementById('popup_emailError').innerHTML = "";
        }
        });

});

   function closePopup() {
        const popup = document.getElementById("staticBackdrop");
        if (popup) {
            popup.classList.remove("show");
            popup.setAttribute("aria-hidden", "true");
        }
    }  
    function openModulesPopup() {
        const modalEl = document.getElementById('modulesModal');
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
    }  
    function closeModulesPopup() {
        const modalEl = document.getElementById('modulesModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();
    }

    const validatePopupEmail = (email) => {
        if (email === "") {
            return "Work Email is required.";
        }
        if (!email.includes('@')) {
            return "Work Email must include '@'.";
        }

        const parts = email.split('@');
        if (parts.length !== 2) {
            return "Work Email format is incorrect.";
        }

        const [local, domain] = parts;

        if (local.length === 0) {
            return "Work Email must have characters before '@'.";
        }

        if (domain.length === 0) {
            return "Work Email must have a domain name after '@'.";
        }

        if (!domain.includes('.')) {
            return "Domain must contain a '.' (dot) like '.com', '.org'.";
        }

        const domainParts = domain.split('.');
        if (domainParts.some(part => part.trim() === "")) {
            return "Domain name is incomplete or invalid.";
        }

        return ""; 
        };

        function validatePopupForm() {
            let valid = true;
            
            const popup_fName = document.getElementById('popup_fName').value.trim();
            const popup_lName = document.getElementById('popup_lName').value.trim();
            const popup_email = document.getElementById('popup_email').value.trim();


            document.getElementById('popup_fNameError').innerHTML = "";
            document.getElementById('popup_lNameError').innerHTML = "";
            document.getElementById('popup_emailError').innerHTML = "";

            if (popup_fName === "") {
                document.getElementById('popup_fNameError').innerHTML = "First Name is required.";
                valid = false;
            }

            if (popup_lName === "") {
                document.getElementById('popup_lNameError').innerHTML = "Last Name is required.";
                valid = false;
            }

            

            const popup_emailError = validatePopupEmail(popup_email);
            if (popup_emailError !== "") {
            document.getElementById('popup_emailError').innerHTML = popup_emailError;
            valid = false;
            }

        return valid;
        }

         function submit_popup()
        {
            if(validatePopupForm())
            {
                const formData = {
                    firstName: document.getElementById('popup_fName').value || '',
                    lastName: document.getElementById('popup_lName').value || '',
                    email: document.getElementById('popup_email').value || '',
                    timezone: document.getElementById('popup_timezone').value || '',
                    formLoadedAt: document.getElementById('popup_form_loaded_at').value || '',
                };
                // 🔹 TEMP store (for next popup)
                sessionStorage.setItem("lead_form_data", JSON.stringify(formData));


                // 🔹 First popup close
                closePopup();

                // 🔹 Open modules popup
                openModulesPopup();
               

            }
        }

        function saveLeadToServer(leadData) {

            const params = new URLSearchParams();

            Object.keys(leadData).forEach(key => {
                if (Array.isArray(leadData[key])) {
                    leadData[key].forEach(val => {
                        params.append(key + "[]", val);
                    });
                } else {
                    params.append(key, leadData[key]);
                }
            });

          

            fetch('/PopupFormInsert.php', {
                method: 'POST',
                body: params
            })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    showSuccessMessage_NL("Thank you! We’ve received your details and our team will be in touch shortly.");
                    document.body.style.paddingRight="0px";
                    sessionStorage.setItem("lead_submitted", "true");
                    sessionStorage.removeItem("lead_form_data");
                    
                }
            });
        }


        function submitModulesPopup() {

            const checked = document.querySelectorAll('input[name="modules[]"]:checked');

            if (checked.length === 0) {
                showModulesError("<span class='small'>Please select at least one module you are interested in.</span>");
                return; 
            }

            const modules = Array.from(checked).map(c => c.value);

            const leadData = JSON.parse(sessionStorage.getItem("lead_form_data")) || {};

            // PHP expects modules[] as array
            leadData["modules"] = modules;

            // FINAL SAVE
            saveLeadToServer(leadData);

            closeModulesPopup();
        }

        function showModulesError(msg) {
            const el = document.getElementById("modules_error");
            el.innerHTML = msg;
            el.style.display = "block";
        }


        function skipModulesPopup() {

            const leadData = JSON.parse(sessionStorage.getItem("lead_form_data")) || {};

            // 🔹 modules nahi mile, but lead save honi chahiye
            saveLeadToServer(leadData);

            closeModulesPopup();
        }



console.log(`Width: ${window.innerWidth}px, Height: ${window.innerHeight}px`);

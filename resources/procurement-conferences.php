<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2025 Procurement Guide: Ultimate Software Buying Guide | ProcureClix</title>
    <meta name="description"
        content="Unlock expert insights in this procurement guide—learn to choose the right e-Procurement software, secure stakeholder buy-in, and implement a modular sourcing platform.">

    <!-- Canonical link -->
    <link rel="canonical" href="https://procureclix.com/resources/procurement-conferences.html" />

   
<script>
    window.salespanelSettings = {
        "sp_cookie_only_tracking": false,
        "sp_vh_with_cookie": true
    }
</script>

<!-- Tracking Code -->
    <script> (function(e, f, g, h, i){
        $salespanel = window.$salespanel || (window.$salespanel = []);
        __sp = i;
        var a=f.createElement(g);
        a.type="text/javascript";
        a.async=1;
        a.src=("https:" == f.location.protocol ? "https://" : "http://") + h;
        var b = f.getElementsByTagName(g)[0];
        b.parentNode.insertBefore(a,b);
    })(window, document, "script", "salespanel.io/src/js/e2d6ea50-0516-4d43-9d5e-1db0f7820581/sp-vh.js", "e2d6ea50-0516-4d43-9d5e-1db0f7820581");
    </script>
<!-- Tracking Code -->

                        

    <script> 
(function(ss,ex)
{ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; 
(function(d,s){ fs=d.getElementsByTagName(s)[0]; 
function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; 
ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); })(document,'script'); })('YEgkB8lDZrW8ep3Z'); 
</script>

                        

    <!-- Google Analytics tag -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZRRX8XDNQP"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-ZRRX8XDNQP');
    </script>

    <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../assets/css-files/main_file.css">
    <link rel="stylesheet" href="../assets/css-files/resources.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="icon" href="../assets/images/favicon_3.png" type="image/png">

    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">


</head>

<body>

    <?php
        $events = [];
        $pastEvents = [];
        $apiUrl = 'https://tutorials.procureclix.com/Tutorial/conference/upcoming'; 
        $ch = curl_init($apiUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // For localhost/self-signed certs, remove in production
        $response = curl_exec($ch);
        if ($response === false) {
            echo 'cURL Error: ' . curl_error($ch);
        } else {
            $events = json_decode($response, true); // `true` gives associative array
        }
        curl_close($ch);

        $apiUrl2 = 'https://tutorials.procureclix.com/Tutorial/conference/past'; 
        $ch2 = curl_init($apiUrl2);
        curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch2, CURLOPT_SSL_VERIFYPEER, false); 
        $response2 = curl_exec($ch2);
        if ($response2 === false) {
            echo 'cURL Error: ' . curl_error($ch2);
        } else {
            $pastEvents = json_decode($response2, true); // `true` gives associative array
        }
        curl_close($ch2);
    ?>

<!-- header start -->
    <div id="preloader" class="" style="display: none;">
        <div class="ctn-preloader" id="ctn-preloader">
            <div class="round_spinner">
                <div class="spinner"></div>
                <div class="text">
                    <!-- <img src="https://docy-jekyll-theme.netlify.app/img/spinner_logo.png" alt=""> -->
                    <img src="https://procureclix.com/assets/images/favicon_3.png" style="width: 50px; height: auto;" />
                    <h4>
                        <span>ProcureClix</span>
                    </h4>
                </div>
            </div>

        </div>
    </div>

    <div id="header-placeholder"></div>
    <div class="top_sec_spacer"></div>

    <!-- header End -->

    <!-- comming soon section -->

    <section class="resorse_banner_bg">
        <div class="container-fluid resourses_container">
            <div class="row text-center justify-content-center align-items-center">
                <h3 class="text-light mb-1">Procurement Conferences</h3>
                <p class="text-light">Check out our list of the top procurement conferences, webinars, and eSourcing
                    events. We keep it updated regularly so you’ll never miss out!</p>
                <!-- <a href="#" role="button" class="btn resourses_btn mt-5">View Guide</a> -->
                <div class="spacer_80"></div>
            </div>
        </div>
    </section>

    <section class="mt-4">
        <!-- spacer -->
        <div class="container-fluid section_contaier">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <div class="d-flex gap-2 align-items-center">
                    <img src="/assets/images/resourses/grossary_book.png" alt="" class="w_20">
                    <span class="fs_20_fw_500_c_linear">Events</span>
                </div>
                <h3>Upcoming Events</h3>
            </div>
            <!-- HTML START -->
             <?php if (!empty($events)): 
            $total = count($events);
            for ($i = 0; $i < $total; $i += 2) {
            echo '<div class="row align-items-stretch g-5 mt-2">';
            for ($j = $i; $j < $i + 2 && $j < $total; $j++) {
              $event = $events[$j];
              // safe extraction with defaults
              $title = htmlspecialchars($event['title'] ?? '');
              $logoUrl = htmlspecialchars($event['logoUrl'] ?? '/assets/images/resourses/default.png');
              $content = nl2br($event['content'] ?? '');
              $speakers = htmlspecialchars($event['speakers'] ?? '');
              $eventDateforUI = htmlspecialchars($event['eventDateforUI'] ?? '');
              $registerUrl = htmlspecialchars($event['registerUrl'] ?? '#');
             ?>
              <div class="col-xl-6 d-flex">
                <div class="confrence_card p-3 d-flex flex-column justify-content-between h-100">
                    <div>
                        <div class="d-flex flex-row gap-3 justify-content-between align-items-center pt-3">
                            <div>
                                <h6 class="fs_16_fw700_c_1313 mb-0"><?= $title ?></h6>
                            </div>
                             <?php if (!empty($logoUrl)): ?>
                            <div class="d-flex align-items-center">
                                <img src="<?= $logoUrl ?>" alt="event_logo" loading="lazy" class="w_150">
                            </div>
                            <?php endif; ?>
                        </div>
                        <hr class="gray_hr">
                        <div class="mb-4">
                            <h6 class="fs_14_fw_700_background">Key Takeaways:</h6>
                            <p class="p2"><?= $content ?></p>
                        </div>
                        <?php if (!empty($speakers)): ?>
                        <div>
                            <h6 class="fs_14_fw_700_background">Speakers:</h6>
                            <p class="p2"><?= $speakers ?></p>
                        </div>
                        <?php endif; ?>
                    </div>

                    <div class="pb-4">
                        <hr class="gray_hr mt-0 mb-3">
                        <div class="d-flex flex-wrap justify-content-between gap-3 w-100">
                            <div class="col-12 col-md-auto">
                                <div class="d-flex flex-row align-items-center gap-4">
                                    <div class="d-flex flex-row gap-2 align-items-center">
                                        <img src="/assets/images/resourses/calender.png" class="h_30_w_auto" alt="">
                                        <span class="fs_12_fw_400_c_1313"><?= $eventDateforUI ?></span>
                                    </div>
                                    <div class="d-flex flex-row gap-2 align-items-center">
                                        <img src="/assets/images/resourses/watch.png" class="h_30_w_auto" alt="">
                                        <span class="fs_12_fw_400_c_1313">Hybrid</span>
                                    </div>
                                    <div class="d-flex flex-row gap-2 align-items-center">
                                        <img src="/assets/images/resourses/sand_watch.png" class="h_30_w_auto" alt="">
                                        <span class="fs_12_fw_400_c_1313">N/A</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-auto ms-auto">
                                <div class="d-flex justify-content-center">
                                    <a href="<?= $registerUrl ?>" target="_blank" class="btn con_register">Register</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            <?php
                    } // inner loop
                    echo '</div>'; // close row
                } // outer loop
                else: ?>
                <p>No upcoming events found.</p>
            <?php endif; ?>
          
        </div>
    </section>


    <section>
        <div class="spacer_80"></div>
        <!-- spacer -->
        <div class="container-fluid section_contaier">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <div class="d-flex gap-2 align-items-center">
                    <img src="/assets/images/resourses/glossary_red_book.png" alt="" class="w_20">
                    <span class="fs_20_fw_500_c_red_linear">Past Events</span>
                </div>
                <h3 clas>Past Events</h3>
            </div>
          

          <?php if (!empty($pastEvents)): 
            $total = count($pastEvents);
            for ($i = 0; $i < $total; $i += 2) {
            echo '<div class="row align-items-stretch g-5 mt-2">';
            for ($j = $i; $j < $i + 2 && $j < $total; $j++) {
              $event = $pastEvents[$j];
              // safe extraction with defaults
              $title = htmlspecialchars($event['title'] ?? '');
              $logoUrl = htmlspecialchars($event['logoUrl'] ?? '/assets/images/resourses/default.png');
              $content = nl2br($event['content'] ?? '');
              $speakers = htmlspecialchars($event['speakers'] ?? '');
              $eventDateforUI = htmlspecialchars($event['eventDateforUI'] ?? '');
              $registerUrl = htmlspecialchars($event['registerUrl'] ?? '#');
             ?>
                <!-- col-1 -->
                <div class="col-xl-6 d-flex">
                    <div class="confrence_card">
                        <div class="disabale_confrence_border"></div>
                        <div class="px-3 d-flex flex-column justify-content-between h-100">
                            <div class="">
                                <div class="d-flex flex-row gap-3 justify-content-between align-items-center pt-3">
                                    <div class="div">
                                        <h6 class="fs_16_fw_700_c_5656 mb-0"><?= $title ?></h6>
                                    </div>
                                    <?php if (!empty($logoUrl)): ?>
                                    <div class="d-flex align-items-center">
                                        <img src="<?= $logoUrl ?>" alt="NCMA_logo"
                                            srcset="<?= $logoUrl ?>" loading="lazy" class="w_100">
                                    </div>
                                    <?php endif; ?>
                                </div>
                                <hr class="gray_hr">

                                <div class="mb-3">
                                    <p class="p2" style="color: #565656;">
                                        <?= $content ?>
                                    </p>
                                </div>
                            </div>
                            <div class=" mb-4">
                                <hr class="gray_hr mt-0 mb-3">
                                <div class="d-flex flex-wrap justify-content-between gap-3 w-100">
                                    <div class="col-12 col-md-auto">
                                        <div class="d-flex flex-row align-items-center gap-4">
                                            <div class="d-flex flex-row gap-2">
                                                <div class="d-flex flex-row gap-2 align-items-center">
                                                    <img src="/assets/images/resourses/calender_gray.png"
                                                        class="h_30_w_auto" alt="">
                                                    <span class="fs_12_fw_400_c_1313"><?= $eventDateforUI ?></span>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row gap-2">
                                                <div class="d-flex flex-row gap-2 align-items-center">
                                                    <img src="/assets/images/resourses/watch_gray.png"
                                                        class="h_30_w_auto" alt="">
                                                    <span class="fs_12_fw_400_c_1313">Hybrid</span>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row gap-2">
                                                <div class="d-flex flex-row gap-2 align-items-center">
                                                    <img src="/assets/images/resourses/sand_watch_gray.png"
                                                        class="h_30_w_auto" alt="">
                                                    <span class="fs_12_fw_400_c_1313">N/A</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-auto ms-auto">

                                        <div class="d-flex justify-content-center">
                                            <a class="con_register_gray" href="<?= $registerUrl ?>" style="pointer-events: none;" disabled>Register</a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                
             <?php
                    } // inner loop
                    echo '</div>'; // close row
                } // outer loop
                else: ?>
                <p>No upcoming events found.</p>
            <?php endif; ?>
            <!-- row end -->

        </div>
    </section>

    <section class="">
        <div class="spacer_120 d-none d-xl-block"></div>
        <div class="spacer_120 d-none d-xl-block"></div>
        <div class="spacer_80 d-block d-xl-none"></div>
        <div class="container-fluid section_contaier position-relative">
            <img src="/assets/images/servises_rfp/rfp_system.png" class="rfp_system_right_img d-none d-xl-block"
                alt="about_glob" srcset="">
            <div class="footer_style px-4 py-5">
                <div class="row gx-5 align-items-center align-items-xxl-end">
                    <div class="col-12 col-sm-6 col-lg-7 ">

                        <h4 class="mb-2 text-capitalize">Get a powerful, intuitive digital procurement platform for
                            less.</h4>
                        <p class="text-capitalize">Our cloud-based web application and portals connect buyers with
                            suppliers through a variety of strategic sourcing tools which leverage real-time technology.
                            Strategic sourcing processes have never been easier. Contact us today to schedule a demo and
                            discuss your requirements with our sourcing consultants.</p>

                        <div class="d-flex align-items-center gap-3">
                            <a href="/contact-us.html" role="button" class="btn resourses_btn_2 mt-5">Schedule a Demo</a>
                            <a href="/procurement-software-pricing.html" role="button"
                                class="btn resourses_btn_bg_white mt-5">See Pricing</a>

                        </div>
                        <div class="spacer_40"></div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-5 text-end">
                        <img src="/assets/images/servises_rfp/rfp_system.png" class="w-100 d-lg-block d-xl-none"
                            alt="about_glob" srcset="">
                    </div>
                </div>

            </div>
        </div>
    </section>
    <div class="spacer_100"></div>
    <!-- footer -->
    <div id="footer_wrapper"></div>
    <!-- footer end -->

    <script src="../assets/js-files/comman_js.js"></script>
    <script src="../assets/js-files/HeaderFooter.js"></script>
    <script src="../bootstrap/js/bootstrap.bundle.min.js"></script>
</body>

</html>
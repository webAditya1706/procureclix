<?php
    $pastEvents = [];
    $apiUrl2 = 'http://localhost:8081/Tutorial/conference/past'; 
    $ch2 = curl_init($apiUrl2);
    curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch2, CURLOPT_SSL_VERIFYPEER, false); 
    $response2 = curl_exec($ch2);
    if ($response2 === false) {
        echo 'cURL Error: ' . curl_error($ch2);
    } else {
        $pastEvents = json_decode($response2, true); 
    }
    curl_close($ch2);

?>



          <?php if (!empty($pastEvents)): 
            $total = count($pastEvents);
            for ($i = 0; $i < $total; $i += 2) {
            echo '<div class="row align-items-stretch g-5 mt-2">';
            for ($j = $i; $j < $i + 2 && $j < $total; $j++) {
              $event = $pastEvents[$j];
              // safe extraction with defaults
              $title = htmlspecialchars($event['title'] ?? '');
              $logoUrl = htmlspecialchars($event['logoUrl'] ?? '');
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
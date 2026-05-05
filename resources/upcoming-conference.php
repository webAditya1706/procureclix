<?php
        $events = [];
        $apiUrl = 'http://localhost:8081/Tutorial/conference/upcoming'; 
        $ch = curl_init($apiUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); 
        $response = curl_exec($ch);
        if ($response === false) {
            echo 'cURL Error: ' . curl_error($ch);
        } else {
            $events = json_decode($response, true); 
        }
        curl_close($ch);

        
    ?>


 <?php if (!empty($events)): 
            $total = count($events);
            for ($i = 0; $i < $total; $i += 2) {
            echo '<div class="row align-items-stretch g-5 mt-2">';
            for ($j = $i; $j < $i + 2 && $j < $total; $j++) {
              $event = $events[$j];
              // safe extraction with defaults
              $title = htmlspecialchars($event['title'] ?? '');
              $logoUrl = htmlspecialchars($event['logoUrl'] ?? '');
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
                                    <a href="javascript:void(0);" class="btn con_register" 
                                    onclick='openRegisterPopup(<?= json_encode($title) ?>,<?= json_encode($eventDateforUI) ?>,<?= json_encode($registerUrl) ?>)'>Register</a>  
                                   
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
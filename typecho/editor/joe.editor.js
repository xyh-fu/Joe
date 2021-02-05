$(function () {
    $('#wmd-editarea textarea').attr('placeholder', '请输入文章内容...（支持图片粘贴上传）');
    $('#wmd-button-bar .wmd-edittab').remove();
    $('#wmd-button-row .wmd-spacer').remove();
    $('#wmd-button-row #wmd-code-button').remove();

    /* 增加自定义功能 */
    const items = [
        {
            title: '回复可见',
            id: 'wmd-hide-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" ><path d="M554.666667 438.101333V277.333333h-85.333334v160.768L330.112 357.717333l-42.666667 73.898667L426.666667 512l-139.221334 80.384 42.666667 73.898667L469.333333 585.898667V746.666667h85.333334v-160.768l139.221333 80.384 42.666667-73.898667L597.333333 512l139.221334-80.384-42.666667-73.898667L554.666667 438.101333z" p-id="15752" fill="#9b9b9b"></path></svg>'
        },
        {
            title: '网易云歌单',
            id: 'wmd-mlist-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M806.3 435.8L553.8 320c-17.4-8-38.2-0.9-46.5 15.8l-123.2 248c-8.2-7.9-17.7-14.9-28.8-20-52.3-24-114.8-2.7-139.8 47.5-25 50.2-2.8 110.3 49.4 134.3 52.3 24 114.8 2.7 139.8-47.5l120.5-242.4c8.3-16.7 29.1-23.8 46.5-15.8L698 497.7c17.4 8 24.7 28 16.4 44.7l-78.1 157.1c-8.2-7.9-17.7-14.9-28.8-20-52.3-24-114.8-2.7-139.8 47.5-25 50.2-2.8 110.3 49.4 134.3 52.3 24 114.8 2.7 139.8-47.5l165.7-333.2c8.4-16.8 1.1-36.8-16.3-44.8zM269.7 358c-28.8 17.1-37.8 53.5-19.9 81.2 17.8 27.7 55.7 36.3 84.5 19.1 28.8-17.1 37.8-53.5 19.9-81.2L268 243.4c-5.9-9.2-3-21.3 6.6-27l17.4-10.3c9.6-5.7 12.6-17.9 6.7-27.1L288 162.3c-6-9.2-18.6-12.1-28.2-6.4l-52.2 31c-9.6 5.7-12.6 17.8-6.6 27l88 136.9c-6.6 1.3-13.2 3.6-19.3 7.2z" p-id="32541" fill="#9b9b9b"></path></svg>'
        },
        {
            title: '网易云音乐',
            id: 'wmd-music-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M263.714782 756.045051a111.4112 141.312 83.299 1 0 280.693286-32.978849 111.4112 141.312 83.299 1 0-280.693286 32.978849Z" p-id="25774" fill="#9b9b9b"></path><path d="M497.664 228.9664h23.7568c13.1072 0 23.7568 10.6496 23.7568 23.7568V737.28H497.664V228.9664z" p-id="25775" fill="#9b9b9b"></path><path d="M593.92 294.2976c-32.768-14.7456-55.7056-47.7184-55.7056-86.4256 0-28.672 13.1072-54.4768 33.3824-71.68-42.3936 9.4208-73.9328 47.104-73.9328 92.16 0 52.224 41.7792 94.4128 94.0032 94.4128h2.2528v-28.4672z" p-id="25776" fill="#9b9b9b"></path><path d="M681.984 422.912c0-76.3904-61.8496-138.24-138.24-138.24-16.1792 0-31.744 2.8672-46.08 7.7824v38.912c9.8304-2.4576 20.0704-3.6864 30.72-3.6864 71.2704 0 129.024 57.7536 129.024 129.024 0 24.1664-6.7584 46.8992-18.2272 66.1504C665.6 497.664 681.984 462.2336 681.984 422.912z" p-id="25777" fill="#9b9b9b"></path></svg>'
        },
        {
            title: 'BiliBili视频',
            id: 'wmd-bili-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M776.192 239.552h-135.392l61.344-61.344c10.592-10.592 10.592-25.376 0-35.968s-25.376-10.592-35.968 0l-103.648 103.68h-101.536l-103.68-103.648c-8.448-10.592-21.152-12.704-33.856-6.336-2.112 0-2.112 2.112-4.224 4.224-10.592 10.592-10.592 25.376 0 35.968l63.456 63.456H247.296c-74.048 0-135.392 61.344-135.392 135.392V711.36c0 71.936 61.344 133.28 135.392 133.28h21.152c0 25.376 21.152 44.416 44.416 44.416s44.416-21.152 44.416-44.416h313.12c2.112 25.376 23.264 44.416 48.672 42.304a45.504 45.504 0 0 0 42.304-42.304h16.928c74.048 0 135.392-61.344 135.392-135.392V372.864c-2.112-74.048-63.456-133.28-137.504-133.28z m-4.256 522.56H255.712c-27.488 0-48.672-23.264-50.784-50.784l-2.112-342.72a51.52 51.52 0 0 1 50.784-50.784h516.224c27.488 0 48.672 23.264 50.784 50.784l2.112 342.72c-2.112 29.6-23.264 50.784-50.784 50.784zM422.88 434.176l12.704 63.456-169.248 31.744-12.704-63.456 169.248-31.744z m162.88 63.488l12.704-63.456 169.248 31.744-12.704 63.456-169.248-31.744z m33.856 133.28c0 2.112 0 6.336-2.112 8.448-10.592 23.264-33.856 38.08-61.344 40.192a59.456 59.456 0 0 1-44.416-21.152c-12.704 12.704-27.488 21.152-44.416 21.152a77.344 77.344 0 0 1-61.344-40.192c0-2.112-2.112-4.224-2.112-8.448 0-8.448 6.336-14.816 14.816-16.928h2.112c6.336 0 10.592 2.112 12.704 8.448 0 0 16.928 23.264 31.744 23.264 29.632 0 29.632-25.376 46.528-44.416 19.04 21.152 19.04 44.416 46.528 44.416 19.04 0 31.744-23.264 31.744-23.264 2.112-4.224 8.448-8.448 12.704-8.448 8.448-2.112 14.816 4.224 16.928 12.704v4.224h0.032z" p-id="40668" fill="#9b9b9b"></path></svg>'
        },
        {
            title: 'DPlayer视频',
            id: 'wmd-dplayer-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M858.88 244.48h-182.016l61.184-61.184a25.6 25.6 0 0 0-36.096-36.096l-97.536 97.28h-182.528l-97.28-97.28a25.6 25.6 0 0 0-36.352 0 25.6 25.6 0 0 0 0 36.096l61.184 61.184h-181.76a25.6 25.6 0 0 0-25.6 25.6v490.752a25.6 25.6 0 0 0 25.6 25.6h691.2a25.6 25.6 0 0 0 25.6-25.6V270.08a25.6 25.6 0 0 0-25.6-25.6z m-25.6 490.752h-640V295.68h640zM743.68 832.256h-460.8a25.6 25.6 0 0 0 0 51.2h460.8a25.6 25.6 0 1 0 0-51.2z" p-id="46595" fill="#9b9b9b"></path><path d="M439.808 623.104a25.6 25.6 0 0 0 12.8 3.584 25.6 25.6 0 0 0 12.8-3.584l171.008-98.56a25.6 25.6 0 0 0 0-44.544l-171.008-98.56a25.6 25.6 0 0 0-38.4 22.016v197.632a25.6 25.6 0 0 0 12.8 22.016z m38.4-175.104l94.208 54.272-94.208 54.272z" p-id="46596" fill="#9b9b9b"></path></svg>'
        },
        {
            title: 'HTML代码',
            id: 'wmd-html-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M832 832V320l-192-192H256c-38.4 0-64 25.6-64 64v640c0 38.4 25.6 64 64 64h512c32 0 64-25.6 64-64zM614.4 192L768 352V832H256V192h358.4z" fill="#9b9b9b"></path><path d="M550.4 403.2c-12.8 0-25.6 6.4-32 19.2l-51.2 204.8c-6.4 12.8 6.4 25.6 19.2 32h6.4c12.8 0 19.2-6.4 25.6-19.2l51.2-204.8c6.4-12.8-6.4-25.6-19.2-32zM409.6 441.6c-6.4-12.8-25.6-12.8-38.4 0L300.8 512c-12.8 12.8-12.8 25.6 0 38.4l70.4 70.4c6.4 6.4 12.8 6.4 19.2 6.4 6.4 0 12.8 0 19.2-6.4 12.8-12.8 12.8-25.6 0-38.4l-51.2-51.2 51.2-51.2c12.8-12.8 12.8-32 0-38.4zM665.6 441.6c-12.8-12.8-25.6-12.8-38.4 0s-12.8 25.6 0 38.4l51.2 51.2-51.2 51.2c-12.8 12.8-12.8 25.6 0 38.4 6.4 6.4 12.8 6.4 19.2 6.4s12.8 0 19.2-6.4l70.4-70.4c12.8-12.8 12.8-25.6 0-38.4l-70.4-70.4z" p-id="36741" fill="#9b9b9b"></path></svg>'
        },
        {
            title: 'H1 ~ H6标题',
            id: 'wmd-title-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M341.333333 213.333333v277.333334h341.333334V213.333333h85.333333v640h-85.333333v-277.333333H341.333333V853.333333H256V213.333333h85.333333z" p-id="100125" fill="#9b9b9b"></path></svg>'
        },
        {
            title: '表格',
            id: 'wmd-table-button',
            svg: '<svg class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M874.72537547 393.10577464c4.43786778 0 8.06319875-3.62677647 8.06319875-8.05886081v-60.45447064c0-4.43859053-3.62605372-8.06392149-8.06319876-8.06392078H709.48402455V149.26956386C709.48402455 144.8374795 705.85724808 141.21142578 701.42444026 141.21142578h-64.48317757c-4.43786778 0-8.06392149 3.62605372-8.06392151 8.05813807V316.52852241H399.15208921V149.26956386C399.15208921 144.8374795 395.5260355 141.21142578 391.08744497 141.21142578h-64.48317758c-4.43208435 0-8.05813807 3.62605372-8.05813879 8.05813807V316.52852241H149.26956386C144.8374795 316.52852241 141.21142578 320.15385266 141.21142578 324.59244319v60.45447064c0 4.43208435 3.62605372 8.05886081 8.05813807 8.05886081h169.27656475V630.89494811H149.26956386C144.8374795 630.89494811 141.21142578 634.52027908 141.21142578 638.95308617v60.45447064c0 4.4328071 3.62605372 8.06319875 8.05813807 8.06319803h169.27656475v167.25245238c0 4.43931328 3.62677647 8.06464426 8.05813879 8.06464425h64.48317759c4.43859053 0 8.06464426-3.62605372 8.06464424-8.06464425V707.47075483h229.72525196v167.25245239c0 4.43931328 3.62677647 8.06464426 8.06392151 8.06464425h64.48317757c4.4328071 0 8.05886081-3.62605372 8.05886155-8.06464425V707.47075483h165.24135091c4.43786778 0 8.06319875-3.63039093 8.06319875-8.06319802v-60.45447064c0-4.4328071-3.62605372-8.05813807-8.06319874-8.05813806H709.48402455V393.10577464h165.24135091zM628.87734118 630.89494811H399.15208921V393.10577464h229.72525197V630.89494811z m0 0" p-id="152923" fill="#9b9b9b"></path></svg>'
        },
        {
            title: '删除线',
            id: 'wmd-delete-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M926.95196533 468.96875H566.87011719a1576.88964844 1576.88964844 0 0 0-29.77597047-5.65493774c-14.98645019-2.73312378-20.92318726-3.86114502-29.02615355-5.46707154-48.34259033-9.42379761-77.46514893-18.84759521-100.64849854-32.2281189-33.07351685-19.31643677-49.18798828-45.5171814-49.18798828-80.19415283 0-34.86978149 14.32397461-63.79870606 41.46405029-83.87072753 26.76187133-19.79104614 64.83444214-30.25469971 110.06652833-30.25469971 51.64178467 0 91.50897217 13.57498169 118.55099487 40.33602905 13.75872802 13.57003784 23.84417724 30.24975586 29.96960449 49.5670166 1.22360229 3.86526489 2.63589477 9.42379761 4.05395507 16.77694703 0.84622192 4.5236206 4.900177 7.72558594 9.32656861 7.72558593h68.60742188c5.2734375 0 9.51608276-4.33493042 9.51608276-9.51608276v-0.94345093c-0.65835571-6.40969849-1.22360229-11.40216065-1.88607788-15.07873535-6.87936401-40.99438477-26.38449097-76.99136352-56.25769043-103.94192505-41.84060669-38.16897583-103.37997437-58.24017334-177.82608033-58.24017335-68.13363648 0-129.48019409 17.05627442-172.73886108 47.96520997-24.12515258 17.3421936-42.78488159 38.82650757-55.22277832 63.79788208-12.72299195 25.53826904-19.12774658 55.03820801-19.12774659 87.54730225 0 27.80172729 5.36901855 51.3616333 16.30316163 72.09118652 7.81704712 14.79776001 18.46939087 27.80255127 32.13171387 39.58209228H97.66024781c-4.14541626 0-7.53607177 3.39065552-7.53607179 7.53689576v56.54196166c0 4.15036011 3.3914795 7.5418396 7.53607179 7.54183961h408.2415161c1.97836304 0.37738037 3.67163086 0.75476074 5.55853272 1.13214111 29.11761474 5.83868408 46.65014648 9.79623413 62.76379395 14.32397461 21.67300415 6.12460328 38.26126099 12.53018188 52.01916504 20.26071167 33.73764038 19.0362854 50.22949219 46.36422729 50.22949219 83.86990357 0 33.26385498-14.60906982 62.95166016-41.0907898 83.68203735-28.74105835 22.52416992-71.24414063 34.30371094-122.97903442 34.30371093-41.181427 0-76.04626465-8.01068115-103.8496399-23.55908203-27.42352295-15.3597107-46.27111817-37.50650024-56.26098632-65.49691773-0.7498169-2.0706482-1.60098266-4.900177-2.54525758-8.48034667-1.12719727-4.14541626-4.99163818-7.0680542-9.13705443-7.0680542H265.49975586c-5.27838135 0-9.51525879 4.33493042-9.51525879 9.52102662v0.93933105c0.18869018 2.16705323 0.37738037 3.96166992 0.56607056 5.3739624 6.12460328 45.98684693 28.55236816 83.68203735 66.62411499 111.9526062C367.55889893 834.13946533 430.03759766 851.47753906 503.9225769 851.47753906c79.34710693 0 145.87893677-18.65972901 192.43185425-53.99752807 23.55990601-17.80773925 41.65274048-39.76583862 53.80966187-65.02313232 12.24920654-25.53826904 18.56167602-54.56442261 18.56167602-86.22647096 0-29.96878052-5.46212768-55.03244018-16.77200317-76.71038818-5.46624756-10.55593872-12.3447876-20.26071167-20.54498291-29.02615356h195.5423584c4.15036011 0 7.54101562-3.3914795 7.54101562-7.53689576v-56.54278564c0.00082398-4.05395508-3.38983154-7.44543457-7.54019165-7.44543457z m0 0" p-id="78474" fill="#9b9b9b"></path></svg>'
        },
        {
            title: '代码段',
            id: 'wmd-snippet-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 128a128 128 0 0 1 128 128v512a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h512z m0 64H256a64 64 0 0 0-63.84 59.2L192 256v512a64 64 0 0 0 59.2 63.84L256 832h512a64 64 0 0 0 63.84-59.2L832 768V256a64 64 0 0 0-59.2-63.84L768 192z m-205.92 136.064a32 32 0 0 1 21.344 36.8l-0.96 3.616-94.88 288a32 32 0 0 1-61.76-16.416l0.96-3.616 94.88-288a32 32 0 0 1 40.416-20.384z m-183.68 35.36a32 32 0 0 1 8.608 41.44l-2.24 3.36-77.28 103.04 77.312 103.04a32 32 0 0 1-3.36 42.24l-3.04 2.56a32 32 0 0 1-42.208-3.296l-2.592-3.072-91.712-122.24a32 32 0 0 1-2.304-34.88l2.304-3.52 91.712-122.24a32 32 0 0 1 44.8-6.4z m267.2 0a32 32 0 0 1 42.208 3.36l2.624 3.04 91.68 122.24 2.304 3.52a32 32 0 0 1 0 31.36l-2.304 3.52-91.68 122.24-2.624 3.104a32 32 0 0 1-38.816 5.536l-3.36-2.24-3.072-2.56a32 32 0 0 1-5.568-38.848l2.24-3.36 77.28-103.072-77.28-103.04-2.24-3.36a32 32 0 0 1 8.64-41.44z" p-id="86024" fill="#9b9b9b"></path></svg>'
        },
        {
            title: '行内代码',
            id: 'wmd-code-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M342.677 595.002" p-id="91366" fill="#9b9b9b"></path><path d="M920.887 527.046l-206.45 206.45c-8.142 8.146-21.347 8.146-29.493 0l-29.493-29.493c-8.146-8.142-8.146-21.347 0-29.493l162.213-162.213L655.452 350.089c-8.146-8.146-8.146-21.351 0-29.497l29.493-29.493c8.146-8.146 21.351-8.146 29.493 0l206.45 206.45C929.038 505.695 929.038 518.9 920.887 527.046zM434.759 857.498l-37.643-10.54c-10.394-2.911-16.788-13.193-14.281-22.969l167.635-644.738c2.682-10.01 13.877-15.712 25.001-12.73l40.287 10.794c11.128 2.982 17.973 13.514 15.287 23.528L458.12 845.068C455.609 854.845 445.153 860.409 434.759 857.498zM368.545 704.003l-29.493 29.493c-8.142 8.146-21.347 8.146-29.493 0l-206.45-206.45c-8.146-8.146-8.146-21.351 0-29.497l206.45-206.45c8.146-8.146 21.351-8.146 29.493 0l29.493 29.493c8.146 8.146 8.146 21.351 0 29.497L206.332 512.297 368.545 674.51C376.691 682.656 376.691 695.861 368.545 704.003z" p-id="91367" fill="#9b9b9b"></path></svg>'
        },
        {
            title: '任务列表',
            id: 'wmd-task-button',
            svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M593.92 215.04c112.64 0 204.8 92.16 204.8 204.8v204.8c0 112.64-92.16 204.8-204.8 204.8h-204.8c-112.64 0-204.8-92.16-204.8-204.8v-204.8c0-112.64 92.16-204.8 204.8-204.8h204.8m0-51.2h-204.8c-143.36 0-256 112.64-256 256v204.8c0 143.36 112.64 256 256 256h204.8c143.36 0 256-112.64 256-256v-204.8c0-138.24-112.64-256-256-256z" fill="#9b9b9b" p-id="3001"></path><path d="M527.36 762.88L230.4 460.8 307.2 399.36l174.08 133.12c71.68-81.92 230.4-250.88 445.44-384l20.48 40.96c-199.68 184.32-363.52 445.44-419.84 573.44m0 0" fill="#9b9b9b" p-id="3002"></path></svg>'
        }
    ];

    /* 用于设置插入到文章的短代码内容 */
    function getInsertTextById(id) {
        let str = '';
        switch (id) {
            case 'wmd-hide-button':
                str = `\n\n[hide]${$('#text').selectionRange() ? $('#text').selectionRange() : '回复可见'}[/hide]\n\n`;
                break;
            case 'wmd-mlist-button':
                str = `\n\n[music-list id="网易云歌单ID" /]\n\n`;
                break;
            case 'wmd-music-button':
                str = `\n\n[music id="网易云音乐ID" /]\n\n`;
                break;
            case 'wmd-bili-button':
                str = `\n\n[bilibili bvid="哔哩哔哩的Bvid" /]\n\n`;
                break;
            case 'wmd-dplayer-button':
                str = `\n\n[dplayer src="M3U8或MP4地址" /]\n\n`;
                break;
            case 'wmd-html-button':
                str = `\n\n!!!\n<span class="test">Hello Joe</span>\n<style>\n  .test { color: #ff6800 }\n</style>\n!!!\n\n`;
                break;
            case 'wmd-title-button':
                str = `\n\n# 一级标题\n## 二级标题\n### 三级标题\n#### 四级标题\n##### 五级标题\n###### 六级标题\n\n`;
                break;
            case 'wmd-table-button':
                str = `\n\n| 左对齐 | 右对齐 | 居中对齐 |\n| :-----| ----: | :----: |\n| 单元格 | 单元格 | 单元格 |\n\n`;
                break;
            case 'wmd-delete-button':
                str = `~~${$('#text').selectionRange() ? $('#text').selectionRange() : '删除线'}~~`;
                break;
            case 'wmd-snippet-button':
                str = `\n\n\`\`\`php\necho 'Hello Joe';\n\`\`\`\n\n`;
                break;
            case 'wmd-code-button':
                str = ` \`${$('#text').selectionRange() ? $('#text').selectionRange() : '行内代码'}\` `;
                break;
            case 'wmd-task-button':
                str = `[x] 任务已完成\n[ ] 任务未完成`;
                break;
        }
        return str;
    }

    /* 此处无需修改 */
    items.forEach(_ => {
        let item = $(`<li class="wmd-button" id="${_.id}" title="${_.title}">${_.svg}</li>`);
        item.on('mousedown touchstart', () => $('#text').insertContent(getInsertTextById(_.id)));
        $('#wmd-button-row').append(item);
    });
});

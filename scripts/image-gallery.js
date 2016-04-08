// Load the image gallery for use when link is clicked
$(document).ready(function (){
  $('#view-gallery').on('click', function() {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        "src": '../images/gallery/01_SL_01.jpg',
        'thumb': '../images/gallery/01_SL_01.jpg',
        'subHtml': '<p>Leather-bound miniature volume from an edition of The Merchant of Venice printed in the early 20th century to promote a chocolate company.<br/><em>Photo by Shane Lin.</em> </p>'
      }, {
        'src': '../images/gallery/02_UVALD_03.jpg',
        'thumb': '../images/gallery/02_UVALD_03.jpg',
        'subHtml': "<p>&quot;Hang there my verse, in witness of my love&quot;—page from an elaborately illustrated edition of <em>As You Like It: a Pleasant Comedy newly embellished with sundry decorations by W. H. Low</em> (1900). Low was a celebrated interior design artist who had decorated New York’s Waldorf Astoria.<br/><em>Image: UVA Library Digital Production Group.</em></p>"
      }, {
        'src': '../images/gallery/03_SL_42.jpg',
        'thumb': '../images/gallery/03_SL_42.jpg',
        'subHtml': "<p>Taped inside the back cover of poet Anne Spencer’s <em>The Complete Works of Shakespeare</em> (1951) are two syllabi for courses in Shakespeare.<br/><em>Photo by Shane Lin.</em></p>"
      }, {
        'src': '../images/gallery/04_SL_35.jpg',
        'thumb': '../images/gallery/04_SL_35.jpg',
        'subHtml': "<p>Publisher William Pickering’s Diamond Shakespeare (1825). About half of these miniature boxed sets were bound in cloth, an innovation in publishing at the time.<br/><em>Photo by Shane Lin.</em></p>"
      }, {
        'src': '../images/gallery/05_UVALD_15.jpg',
        'thumb': '../images/gallery/05_UVALD_15.jpg',
        'subHtml': "<p>Alexander Pope’s &quot;corrected&quot; edition of Shakespeare altered the Bard’s lines to make them conform to eighteenth century standards of versification.<br/><em>Image: UVA Library Digital Production Group.</em></p>"
      }, {
        'src': '../images/gallery/06_UVALD_06.jpg',
        'thumb': '../images/gallery/06_UVALD_06.jpg',
        'subHtml': "<p>Detail from Ron King’s 1979 edition of <em>Antony &amp; Cleopatra</em>—a work of modern art with extensive annotations and modernist renderings of themes in the play.<br/><em>Image: UVA Library Digital Production Group.</em></p>"
      }, {
        'src': '../images/gallery/07_SL_22.jpg',
        'thumb': '../images/gallery/07_SL_22.jpg',
        'subHtml': "<p>Box containing a miniature three volume set, Jan Kellett’s <em>Storming Shakespeare</em> (2013), about storms in Shakespeare’s plays.<br/><em>Photo by Shane Lin.</em></p>"
      }, {
        'src': '../images/gallery/08_SL_26.jpg',
        'thumb': '../images/gallery/08_SL_26.jpg',
        'subHtml': "<p>Volume one of Jan Kellett’s <em>Storming Shakespeare</em> (2013) is an essay about storms in the plays. It opens in the center to a passage from The Tempest.<br/><em>Photo by Shane Lin.</em></p>"
      }, {
        'src': '../images/gallery/09_SL_47.jpg',
        'thumb': '../images/gallery/09_SL_47.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/10_SL_05.jpg',
        'thumb': '../images/gallery/10_SL_05.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/11_SL_41.jpg',
        'thumb': '../images/gallery/11_SL_41.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/12_UVALD_09.jpg',
        'thumb': '../images/gallery/12_UVALD_09.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/13_UVALD_10.jpg',
        'thumb': '../images/gallery/13_UVALD_10.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/14_SL_03.jpg',
        'thumb': '../images/gallery/14_SL_03.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/15_UVALD_07.jpg',
        'thumb': '../images/gallery/15_UVALD_07.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/16_SL_08.jpg',
        'thumb': '../images/gallery/16_SL_08.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/17_SL_07.jpg',
        'thumb': '../images/gallery/17_SL_07.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/18_UVALD_05.jpg',
        'thumb': '../images/gallery/18_UVALD_05.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/19_UVALD_01.jpg',
        'thumb': '../images/gallery/19_UVALD_01.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/20_SL_11.jpg',
        'thumb': '../images/gallery/20_SL_11.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/21_UVALD_16.jpg',
        'thumb': '../images/gallery/21_UVALD_16.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/22_SL_37.jpg',
        'thumb': '../images/gallery/22_SL_37.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/23_SL_30.jpg',
        'thumb': '../images/gallery/23_SL_30.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/24_SL_44.jpg',
        'thumb': '../images/gallery/24_SL_44.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/25_SL_43.jpg',
        'thumb': '../images/gallery/25_SL_43.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/26_SL_14.jpg',
        'thumb': '../images/gallery/26_SL_14.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/27_SL_16.jpg',
        'thumb': '../images/gallery/27_SL_16.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/28_SL_21.jpg',
        'thumb': '../images/gallery/28_SL_21.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/29_UVALD_08.jpg',
        'thumb': '../images/gallery/29_UVALD_08.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/30_UVALD_14.jpg',
        'thumb': '../images/gallery/30_UVALD_14.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/31_SL_39.jpg',
        'thumb': '../images/gallery/31_SL_39.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/32_UVALD_11.jpg',
        'thumb': '../images/gallery/32_UVALD_11.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/33_SL_45.jpg',
        'thumb': '../images/gallery/33_SL_45.jpg',
        'subHtml': ""
      }, {
        'src': '../images/gallery/34_SL_34.jpg',
        'thumb': '../images/gallery/34_SL_34.jpg',
        'subHtml': ""
      }]
    })
  });
});

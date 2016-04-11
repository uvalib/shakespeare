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
        'subHtml': "<p>Portrait of acclaimed African-American actor Ira Aldridge from <em>A Glance at the Life of Ira Frederick Aldridge</em> (1917). Aldridge gained popular acclaim throughout Europe when he stepped into the role of Othello after celebrated British actor Charles Kean died during the play’s run in England.<br/><em>Photo by Shane Lin.</em></p>"
      }, {
        'src': '../images/gallery/10_SL_05.jpg',
        'thumb': '../images/gallery/10_SL_05.jpg',
        'subHtml': "<p>Revolving case containing a miniature edition of Shakespeare published in 1904 to commemorate the career of acclaimed Shakespearean actor Ellen Terry.<br/><em>Photo by Shane Lin.</em></p>"
      }, {
        'src': '../images/gallery/11_SL_41.jpg',
        'thumb': '../images/gallery/11_SL_41.jpg',
        'subHtml': "<p>Foldout copy of the balcony scene from <em>Romeo and Juliet</em>, translated by the granddaughter of book artist John Hastings into the <em>argot</em> of texting teens, whose first high school encounter with the Bard is usually <em>Romeo and Juliet</em>.<br/><em>Photo by Shane Lin.</em></p>"
      }, {
        'src': '../images/gallery/12_UVALD_09.jpg',
        'thumb': '../images/gallery/12_UVALD_09.jpg',
        'subHtml': "<p>From <em>The American edition of Boydell's Illustrations of the Dramatic works of Shakspeare</em>, (1852). George Romney’s illustration shows Prospero summoning a storm to wreck the ship carrying his brother Antonio, in <em>The Tempest</em>.<br/><em>Image: UVA Library Digital Production Group.</em></p>"
      }, {
        'src': '../images/gallery/13_UVALD_10.jpg',
        'thumb': '../images/gallery/13_UVALD_10.jpg',
        'subHtml': "<p>&quot;Methought I was enamoured of an ass.&quot; Detail of engraving from Henry Fuseli's &quot;Midsummer Night's Dream. Act IV, Scene 1,&quot; from <em>The American edition of Boydell's Illustrations of the Dramatic works of Shakspeare</em>, (1852).<br/><em>Image: UVA Library Digital Production Group.</em></p>"
      }, {
        'src': '../images/gallery/14_SL_03.jpg',
        'thumb': '../images/gallery/14_SL_03.jpg',
        'subHtml': "<p>A miniature version of Yorick’s skull in <em>Hamlet</em>, designed by Jan and Jarmila Sobota in 2009, serves as a container for a tiny volume of quotations from the play.<br/><em>Photo by Shane Lin.</em></p>"
      }, {
        'src': '../images/gallery/15_UVALD_07.jpg',
        'thumb': '../images/gallery/15_UVALD_07.jpg',
        'subHtml': "<p>Directions by Janet Zweig from The 336 lines currently expurgated from Shakespeare’s <em>Romeo and Juliet</em> in ninth grade textbooks (1989) tell students how to put censored text back into the play.<br/><em>Image: UVA Library Digital Production Group.</em></p>"
      }, {
        'src': '../images/gallery/16_SL_08.jpg',
        'thumb': '../images/gallery/16_SL_08.jpg',
        'subHtml': "<p>Miniature, full-text edition of <em>Macbeth</em>, published in 2013 by Jan and Jarmila Sobota, bound in leather with the title stamped in red on the cover.<br/><em>Photo by Shane Lin.</em></p>"
      }, {
        'src': '../images/gallery/17_SL_07.jpg',
        'thumb': '../images/gallery/17_SL_07.jpg',
        'subHtml': "<p>&quot;Is this a dagger which I see before me...?&quot; Yes it is—a bloody dagger adorns this box designed by Jan and Jarmila Sobota to hold their miniature 2013 edition of <em>Macbeth</em>.<br/><em>Photo by Shane Lin.</em></p>"
      }, {
        'src': '../images/gallery/18_UVALD_05.jpg',
        'thumb': '../images/gallery/18_UVALD_05.jpg',
        'subHtml': "<p>Eighteenth century edition of Shakespeare owned by the prominent Coles family of Virginia, and read by Sarah Coles, probably in the eighteenth century, judging by the term &quot;Toadeater,&quot; inscribed on the title page, an early variant of &quot;toady.&quot;<br/><em>Image: UVA Library Digital Production Group.</em></p>"
      }, {
        'src': '../images/gallery/19_UVALD_01.jpg',
        'thumb': '../images/gallery/19_UVALD_01.jpg',
        'subHtml': "<p>Volume II of Fay Adams Britton’s 1896 children’s edition of Shakespeare. Britton added fairies to the plays where Shakespeare did not include them, as a gentle way of providing serious commentary to get children thinking about themes in the plays.<br/><em>Image: UVA Library Digital Production Group.</em></p>"
      }, {
        'src': '../images/gallery/20_SL_11.jpg',
        'thumb': '../images/gallery/20_SL_11.jpg',
        'subHtml': "<p>Model of a printing press from Shakespeare’s time constructed on a minute scale—shown here in comparison with the size of a penny.<br/><em>Photo by Shane Lin.</em></p>"
      }, {
        'src': '../images/gallery/21_UVALD_16.jpg',
        'thumb': '../images/gallery/21_UVALD_16.jpg',
        'subHtml': "<p>Edmond Malone’s diagram comparing William Henry Ireland’s forgeries of Shakespeare’s hand (VII-IX) to the real thing (Nos. X-XIII). No. XIII, &quot;By me William Shakspear,&quot; is from Shakespeare’s will.<br/><em>Image: UVA Library Digital Production Group.</em></p>"
      }, {
        'src': '../images/gallery/22_SL_37.jpg',
        'thumb': '../images/gallery/22_SL_37.jpg',
        'subHtml': "<p>William Pickering’s <em>The Plays of Shakespeare: in nine volumes</em> (1825) was called the Diamond Shakespeare because it was printed with Diamond typeface, the smallest in use at the time.<br/><em>Photo by Shane Lin.</em></p>"
      }, {
        'src': '../images/gallery/23_SL_30.jpg',
        'thumb': '../images/gallery/23_SL_30.jpg',
        'subHtml': "<p>An example of fore-edge painting—the cottage of Shakespeare’s wife Anne Hathaway, painted on the outer edges of <em>The Poems of Shakespeare</em> (London: William Pickering, 1853)—is visible only when the pages are fanned.<br/><em>Photo by Shane Lin.</em></p>"
      }, {
        'src': '../images/gallery/24_SL_44.jpg',
        'thumb': '../images/gallery/24_SL_44.jpg',
        'subHtml': "<p>African-American poet Anne Spencer’s <em>The Complete Works of Shakespeare</em> (1951), opened to <em>Romeo and Juliet</em>, showing her extensive handwritten annotations.<br/><em>Photo by Shane Lin.</em></p>"
      }, {
        'src': '../images/gallery/25_SL_43.jpg',
        'thumb': '../images/gallery/25_SL_43.jpg',
        'subHtml': "<p>In her well-marked volume <em>The Complete Works of Shakespeare</em> (1951), poet Anne Spencer has noted &quot;premonition&quot; at Romeo and Juliet’s last parting.<br/><em>Photo by Shane Lin.</em></p>"
      }, {
        'src': '../images/gallery/26_SL_14.jpg',
        'thumb': '../images/gallery/26_SL_14.jpg',
        'subHtml': "<p>A tiny wooden box in the form of an Elizabethan theater contains Maryline P. Adams’ book, <em>Polonius’ P’s & Q’s</em> (2002), illustrating Polonius’ advice to his son Laertes in <em>Hamlet</em>.<br/><em>Photo by Shane Lin.</em></p>"
      }, {
        'src': '../images/gallery/27_SL_16.jpg',
        'thumb': '../images/gallery/27_SL_16.jpg',
        'subHtml': "<p>Representation of an Elizabethan theater opens to reveal a book cover in the form of a stage. Inside <em>Polonius’ P’s & Q’s</em> (2002) Maryline P. Adams illustrates the advice imparted by Polonius to his son Laertes, from <em>Hamlet</em>.<br/><em>Photo by Shane Lin.</em></p>"
      }, {
        'src': '../images/gallery/28_SL_21.jpg',
        'thumb': '../images/gallery/28_SL_21.jpg',
        'subHtml': "<p>Maryline P. Adams’ <em>Polonius’ P’s & Q’s</em> (2002) opened 360 degrees, view from above. Each page illustrates Polonius’ advice to his son Laertes in <em>Hamlet</em>.<br/><em>Photo by Shane Lin.</em></p>"
      }, {
        'src': '../images/gallery/29_UVALD_08.jpg',
        'thumb': '../images/gallery/29_UVALD_08.jpg',
        'subHtml': "<p>Page from the <em>Shakespeare Notebook</em> designed by UVA English professor Charles Kent to facilitate study of the plays. Student C. O. P. Trexler has made extensive notations on <em>The Merchant of Venice</em>.<br/><em>Image: UVA Library Digital Production Group.</em></p>"
      }, {
        'src': '../images/gallery/30_UVALD_14.jpg',
        'thumb': '../images/gallery/30_UVALD_14.jpg',
        'subHtml': "<p>Photographic postcard details costume and production design in Julia Marlowe and E. H. Sothern’s performance of <em>Romeo and Juliet</em> in the nineteenth century.<br/><em>Image: UVA Library Digital Production Group.</em></p>"
      }, {
        'src': '../images/gallery/31_SL_39.jpg',
        'thumb': '../images/gallery/31_SL_39.jpg',
        'subHtml': "<p>Volume from the &quot;microminiature&quot; <em>William Shakespeare Anthology</em> (2003), opened to the Weird Sisters’ incantation in <em>Macbeth</em>.<br/><em>Photo by Shane Lin.</em></p>"
      }, {
        'src': '../images/gallery/32_UVALD_11.jpg',
        'thumb': '../images/gallery/32_UVALD_11.jpg',
        'subHtml': "<p>English grad student and future bibliographer Matthew Bruccoli operates the Hinman Collator as Fredson Bowers looks on. The collator’s inventor, Charlton Hinman, was Bowers’ protégé at the University of Virginia.<br/><em>Image: UVA Library Digital Production Group.</em></p>"
      }, {
        'src': '../images/gallery/33_SL_45.jpg',
        'thumb': '../images/gallery/33_SL_45.jpg',
        'subHtml': "<p>Volume from &quot;Edwin Booth’s Prompt Book&quot; series. Part of each page is left blank for writing stage directions, and there are also recommendations for costume and production design at the end.<br/><em>Photo by Shane Lin.</em></p>"
      }, {
        'src': '../images/gallery/34_SL_34.jpg',
        'thumb': '../images/gallery/34_SL_34.jpg',
        'subHtml': "<p>Minute page ornamentation from miniature volume of <em>Shakespeare’s Sonnets</em> (2000).<br/><em>Photo by Shane Lin.</em></p>"
      }]
    })
  });
});

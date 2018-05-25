function show_tab(tone,ttwo,bone,btwo) {
	//alert(tone);
	$(ttwo).hide();	
	$(tone).show();	
	
	//alert();
	$(btwo).removeClass('active');
	//$(tone).removeClass('active');
	$(bone).addClass('active');
}


$(document).ready(function()
		{
		// Using GetJSON
		//var url="http://localhost/phonegap/database/json.php";
		var menu = '<li><a href="index.html" class="close-panel"><img src="images/icons/red/home.png" alt="" title="" /><span>Home</span></a></li><li><a href="about.html" class="close-panel"><img src="images/icons/red/user.png" alt="" title="" /><span>About</span></a></li><li><a href="service-times.html" class="close-panel"><img src="images/icons/red/features.png" alt="" title="" /><span>Service Times</span></a></li><li><a href="announcements.html" class="close-panel"><img src="images/icons/red/announcement.png" alt="" title="" /><span>Announcements</span></a></li><li><a href="photo-gallery.html" class="close-panel"><img src="images/icons/red/photos.png" alt="" title="" /><span>Photo Gallery</span></a></li><li><a href="service-video.html" class="close-panel"><img src="images/icons/red/video.png" alt="" title="" /><span>Service Video</span></a></li><li><a href="joseph-barik.html" class="close-panel"><img src="images/icons/red/user.png" alt="" title="" /><span>Joseph Barik</span></a></li>	<li><a href="support.html" class="close-panel"><img src="images/icons/red/supporticon.png" alt="" title="" /><span>Support</span></a></li>   <li><a href="what-we-believe.html" class="close-panel"><img src="images/icons/red/books.png" alt="" title="" /><span>What We Believe</span></a></li><li><a href="praise-reports.html" class="close-panel"><img src="images/icons/red/reflection.png" alt="" title="" /><span>Praise Reports</span></a></li><li><a href="daily-grace-inspirations.html" class="close-panel"><img src="images/icons/red/book.png" alt="" title="" /><span>Daily Grace Inspirations</span></a></li><li><a href="pray-together.html" class="close-panel"><img src="images/icons/red/prayer.png" alt="" title="" /><span>Pray Together</span></a></li><li><a href="partner-with-us.html" class="close-panel"><img src="images/icons/red/partner.png" alt="" title="" /><span>Partner With Us</span></a></li><li><a href="contact.html" class="close-panel"><img src="images/icons/red/contact.png" alt="" title="" /><span>Contact</span></a></li>';
		
		$("#sidemenu").append(menu);
		
	});
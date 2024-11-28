function(properties, context) {
    localStorage.setItem("jlap-SL_Perm", btoa(JSON.stringify({ forms: properties.record_forms, numbers: properties.record_numbers, emails: properties.record_emails, ips: properties.record_ips })));
	smartlook('record', { forms: properties.record_forms, numbers: properties.record_numbers, emails: properties.record_emails, ips: properties.record_ips });
    localStorage.setItem("jlap-SL_Canvas", properties.record_canvas);
    switch(properties.record_canvas) {
      case "Low Quality":
          document.body.dataset.sl = "canvas-lq";
          break;
          
      case "Medium Quality":
          document.body.dataset.sl = "canvas-mq";
          break;
          
      case "High Quality":
          document.body.dataset.sl = "canvas-hq";
          break;
         
      case "None":
          document.body.dataset.sl = null;
          break;
  }
}
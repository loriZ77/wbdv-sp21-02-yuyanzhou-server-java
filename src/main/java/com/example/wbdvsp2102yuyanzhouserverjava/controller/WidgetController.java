package com.example.wbdvsp2102yuyanzhouserverjava.controller;

import java.util.List;
import com.example.wbdvsp2102yuyanzhouserverjava.models.Widget;
import com.example.wbdvsp2102yuyanzhouserverjava.services.WidgetsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController // inside in this class accessible to http
@CrossOrigin(origins = "*") // what should server allow

public class WidgetController {
  //dependency injection
  @Autowired
  WidgetsService service;


  @PostMapping("/api/topics/{tid}/widgets")
  public Widget createWidgetForTopic(
      @PathVariable("tid") String topicId,
      @RequestBody Widget widget
  ) {
    return service.createWidgetForTopic(topicId, widget);
  }

  @GetMapping("/api/widgets")
  public List<Widget> findAllWidget() {
    return service.findAllWidgets();
  }

  @GetMapping("/api/topics/{tid}/widgets")
  public List<Widget> findWidgetsForTopic(
      @PathVariable("tid") String topicId) {
    return service.findWidgetsForTopicId(topicId);
  }

  @DeleteMapping("/api/widgets/{wid}")
  public Integer deleteWidget(
      @PathVariable("wid") Long id) {
    return service.deleteWidget(id);
  }

  @PutMapping("/api/widgets/{wid}")
  public Integer updateWidget(
      @PathVariable("wid") Long id,
      @RequestBody Widget newWidget
  ) {
    return service.updateWidget(id, newWidget);
  }
}

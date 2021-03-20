package com.example.wbdvsp2102yuyanzhouserverjava.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import com.example.wbdvsp2102yuyanzhouserverjava.models.Widget;
import org.springframework.stereotype.Service;

@Service
public class WidgetsService {
  private List<Widget> widgets = new ArrayList<>();
  {
    Widget w1 = new Widget(123l, "6047c8c2f10b760017274b6a", "HEADING", 1, "This is heading1");
    Widget w2 = new Widget(234l, "6047c8c3f10b760017274b6b", "PARAGRAPH", 1, "This is PARAGRAPH1");
    Widget w3 = new Widget(345l, "6047c8c2f10b760017274b6a", "HEADING", 3, "This is heading2");
    Widget w4 = new Widget(456l, "6047c8c3f10b760017274b6b", "PARAGRAPH", 1, "This is PARAGRAPH2");
    Widget w5 = new Widget(789l, "6047c8c3f10b760017274b6b", "HEADING", 4, "This is heading3");
    Widget w6 = new Widget(101112l, "6047c8c3f10b760017274b6b", "PARAGRAPH", 1, "This is PARAGRAPH3");
    widgets.add(w1);
    widgets.add(w2);
    widgets.add(w3);
    widgets.add(w4);
    widgets.add(w5);
    widgets.add(w6);
  }

  public Widget createWidgetForTopic(String topicId, Widget newWidget) {
    newWidget.setTopicId(topicId);
    newWidget.setId(new Date().getTime());
    widgets.add(newWidget);
    return newWidget;
  }

  public List<Widget> findAllWidgets() {
    return widgets;
  }

  public List<Widget> findWidgetsForTopicId(String topicId) {
    List<Widget> ws = new ArrayList<>();
    for (Widget wt : widgets) {
      if (wt.getTopicId().equals(topicId)) {
        ws.add(wt);
      }
    }
    return ws;
  }

  public Integer deleteWidget(Long id) {
    for (int i = 0; i < widgets.size(); i++) {
      if (widgets.get(i).getId().equals(id)) {
        widgets.remove(i);
        return 1;
      }
    }
    return 0;
  }

  public Integer updateWidget(Long id, Widget newWidget) {
    for (int i = 0; i < widgets.size(); i++) {
      if (widgets.get(i).getId().equals(id)) {
        widgets.set(i, newWidget);
        return 1;
      }
    }
    return 0;
  }
}

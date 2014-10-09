---
title: Cảm ơn vì bạn đã đăng ký để làm chủ Hour of Code!
layout: wide
---

<%
  facebook = {:u=>"http://#{request.host}/us"}

  twitter = {:url=>"http://hourofcode.com", :related=>'codeorg', :hashtags=>'', :text=>hoc_s(:twitter_default_text)}
  twitter[:hashtags] = 'HourOfCode' unless hoc_s(:twitter_default_text).include? '#HourOfCode'
%>

# Cảm ơn bạn đã đăng ký để làm chủ Hour of Code!

**Mọi**nhà tổ chức Hour of Code sẽ được nhận 10 GB lưu trữ trên Dropbox hoặc $10 tài khoản skype như là món quà cảm ơn. [Chi tiết](/prizes)

<% if @country == 'us' %>

Mang cả [Toàn bộ trường học của bạn tham gia](/us/prizes) để có cơ hội nhận những giải thưởng lớn cho trường của bạn.

<% end %>

## 1. Truyền tải thông điệp

Nói với bạn bè của bạn về #HourOfCode.

<%= view :share_buttons, facebook:facebook, twitter:twitter %>

<% if @country == 'us' %>

## 2. Đề nghị trường của bạn tổ chức Hour of Code

[Gửi bức thư này](/resources#email) hoặc [Đưa bản viết tay này tới hiệu trưởng nhà trường](/files/schools-handout.pdf). Khi trường của bạn sẵn sàng, [tham gia để ginàh $10,000 giá trị các sản phẩm công nghệ cho trường của bạn](/prizes) và thử thách các trường khác trong khu vực của bạn để tham gia vào chương trình.

<% else %>

## 2. Đề nghị trường của bạn tổ chức Hour of Code

[Gửi bức thư điện tử này](/resources#email) hoặc đưa [bản in này](/files/schools-handout.pdf) tới hiệu trưởng nhà trường.

<% end %>

## 3. Đề nghị nhân viên của bạn tham gia cùng

[Gửi bức thư điện tử này](/resources#email) tới quản lý của bạn, hoặc Giám độc điều hành. Hoặc [ đưa cho họ bản in bằng giấy](/resources/hoc-one-pager.pdf).

## 4. Quảng bá Hour of Code tới đất nước của bạn

Lập thành càng nhóm tại địa phương - nhóm các bạn sinh viên đại học, nhóm những người lớn tuổi, nhóm những người trong độ tuổi lao động. Hoặc tổ chức một sự kiện Hour of Code "block party" cho những người hàng xóm của bạn.

## 5. Đưa ra yêu cầu tới quan chức địa phương để hỗ trợ cho sự kiện Hour of Code

[Gửi bức thư điện tử này](/resources#politicians) tới thị trưởng của bạn, ủy ban thành phố, hoặc ban giám hiệu nhà trường. hoặc [ đưa cho họ bản in ra giấy](/resources/hoc-one-pager.pdf) và mời họ tới trường của bạn để tham dự sự kiện.

<%= view 'popup_window.js' %>
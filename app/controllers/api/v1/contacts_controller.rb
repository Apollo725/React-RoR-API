module Api
  module V1
    class ContactsController < ApplicationController
      def index

        render json: { 
          data: [{
            "key": 1,
            "name": "Merrick",
            "phone_num": "380-827-1153",
            "country": "Spain",
            "ip_address": "89.51.4.251",
            "time_ellapsed": 48,
            "ltv_price": 8,
            "history": "odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est",
            "message": "purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam",
            "tags": ['test', 'quees', 'lorem', 'ipsum', 'stressful',]
           }, {
            "key": 2,
            "name": "Susi",
            "phone_num": "148-797-2599",
            "country": "South Africa",
            "ip_address": "11.198.52.44",
            "time_ellapsed": 51,
            "ltv_price": 84,
            "history": "vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum",
            "message": "nulla suscipit ligula in lacus curabitur at ipsum ac tellus",
            "tags": ['report', 'fake', 'mock', 'generate', 'datat',]
           }, {
            "key": 3,
            "name": "Ettore",
            "phone_num": "208-898-1989",
            "country": "El Salvador",
            "ip_address": "166.247.13.46",
            "time_ellapsed": 51,
            "ltv_price": 26,
            "history": "quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer",
            "message": "faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur",
            "tags": ['fake', 'fake', 'mock', 'dummy', 'datat',]
           }, {
            "key": 4,
            "name": "Wolf",
            "phone_num": "418-411-2670",
            "country": "Brazil",
            "ip_address": "100.250.53.207",
            "time_ellapsed": 76,
            "ltv_price": 29,
            "history": "ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat",
            "message": "orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin",
            "tags": ['report', 'report', 'mock', 'generate', 'datat',]
           }, {
            "key": 5,
            "name": "Gwendolen",
            "phone_num": "158-245-5144",
            "country": "Madagascar",
            "ip_address": "169.209.156.112",
            "time_ellapsed": 42,
            "ltv_price": 88,
            "history": "felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel",
            "message": "semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus",
            "tags": ['report', 'fake', 'mock', 'generate', 'datat',]
           }, {
            "key": 6,
            "name": "Harry",
            "phone_num": "661-295-9592",
            "country": "Saudi Arabia",
            "ip_address": "17.125.234.204",
            "time_ellapsed": 67,
            "ltv_price": 61,
            "history": "pede malesuada in imperdiet et commodo vulputate justo in blandit",
            "message": "pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis",
            "tags": ['mock', 'fake', 'mock', 'resolutionm',]
           }, {
            "key": 8,
            "name": "Mabel",
            "phone_num": "246-104-0274",
            "country": "Germany",
            "ip_address": "228.42.225.110",
            "time_ellapsed": 64,
            "ltv_price": 14,
            "history": "lobortis ligula sit amet eleifend pede libero quis orci nullam",
            "message": "vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia",
            "tags": ['fake test', 'stress']
           }, {
            "key": 9,
            "name": "Woodman",
            "phone_num": "239-749-1372",
            "country": "Japan",
            "ip_address": "3.14.110.152",
            "time_ellapsed": 93,
            "ltv_price": 26,
            "history": "sapien sapien non mi integer ac neque duis bibendum morbi non quam nec",
            "message": "vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
            "tags": ['roller', 'tada']
           }, {
            "key": 10,
            "name": "Constantia",
            "phone_num": "395-822-6663",
            "country": "Canada",
            "ip_address": "132.59.19.76",
            "time_ellapsed": 20,
            "ltv_price": 71,
            "history": "nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit",
            "message": "aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra",
            "tags": ['time', 'sttee']
           }, 
           ]
        }, status: :ok
      end
    end
  end
end
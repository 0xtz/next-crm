// send message in whatsapp buisness api

/*
curl -i -X POST `
  https://graph.facebook.com/v17.0/165745039945964/messages `
  -H 'Authorization: Bearer EABk8ZBZASoJLUBO24SZA4zrcGrFVSgZCxCkRLsrTkx6eWdZCzcZByJvTRZBnJprZBTp8vgVzv41rVachj0U6gAoMyH0LXuCySweEm5jt15NJGyBfxDLC5iaLZBcgVWtunaLHQ9UyTuCs6MXGh6gMuxcbKZBTMNGNF4MqJvTpBnST8ep8HZAb01dJZB7CBXjH9B7k8omeLn26IHpsduuoCLD7Q1AZD' `
  -H 'Content-Type: application/json' `
  -d '{ \"messaging_product\": \"whatsapp\", \"to\": \"212777040357\", \"type\": \"template\", \"template\": { \"name\": \"hello_world\", \"language\": { \"code\": \"en_US\" } } }'
*/

const userData = {
  ACCESS_TOKEN:
    "EAAESktZCZC1FgBO3ZAQI6QlQe5ECQwZCqyL9J9OBS2ntRnahPoboYNsq1Mc1orLBskIok2ubzLfyKpCkp9rZAfZAMi0dAEmnx7a0LoeIrHDbBnCW6wlCFvMv19ShGiwprvU4ioET7tEF4DDMpVZCN4rBEk8CYLcM3BBZCZAUSTXCycqYF0B2Au4GTZCFlZCOoRgnw7Y",
  TO: "212777040357",
  WHATSAPP_BUSINESS_ID: "165745039945964",
};

export async function createAWhatsAppTemplate() {
  // body obj :
  const body = {
    name: "OTP",
    category: "AUTHENTICATION",
    language: "en_US",
    components: [
      {
        type: "HEADER",
        format: "TEXT",
        text: "OTP",
        example: {
          header_text: ["OTP"],
        },
      },
      {
        type: "BODY",
        text: "Your OTP is {{1}}",
        example: {
          body_text: [["1234"]],
        },
      },
      {
        type: "BUTTONS",
        buttons: [
          {
            type: "PHONE_NUMBER",
            text: "Call",
            phone_number: "15550051310",
          },
          {
            type: "URL",
            text: "Shop Now",
            url: "https://www.luckyshrub.com/shop/",
          },
        ],
      },
    ],
  };

  return await Promise.resolve(body);
}

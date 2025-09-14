import axios from "axios";

export default new class appController {

    async handleSendMessage(req, res) {
        const {name, connectWay, connectType, message} = req.body;

        const text = `
Данил, здравствуйте!\nПоздравляем вас с новым потенциальным клиентом!\nИмя: ${name}\nСпособ связи: ${connectWay}\nТип связи: ${connectType}\nКомментарий: ${message}\n`
        try {
            await axios.post(`https://api.telegram.org/bot${process.env.bot_token}/sendMessage`, {
                chat_id: Number(process.env.chat_id),
                text,
            })
            return res.json({
                success: true,
                message: "Вы успешно отправили заявку!"
            });
        } catch (e) {
            console.log(e);
            return res.json({ success: false, message: "Произошла непредвиденная ошибка. Пожалуйста, попробуйте позже" });
        }
    }
}()
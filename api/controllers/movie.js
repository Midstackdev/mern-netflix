export const me = (req, res) => {
    return res.status(200).json({ name: 'Alfred Smith' })
}
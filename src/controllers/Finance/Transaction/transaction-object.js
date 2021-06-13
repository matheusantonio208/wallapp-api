export function walletTransactionObject({
  _id,
  id_owner_user,
  id_wallet,
  type,
  transfer_from_wallet,
  transfer_to_wallet,
  name,
  description,
  locale,
  value,
  date_start,
  payday,
  repeat_every,
  date_end,
  category,
  group_items,
  status
}){
  return ({
    _id,
    id_owner_user,
    id_wallet,
    type,
    transfer_from_wallet,
    transfer_to_wallet,
    name,
    description,
    locale,
    value,
    date_start,
    payday,
    repeat_every,
    date_end,
    category,
    group_items,
    status
  });
};

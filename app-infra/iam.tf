data "aws_iam_user" "user" {
  user_name = var.user_name
}

output "user" {
  value = data.aws_iam_user.user
}

variable "repository_name" {
  type = string
}

variable "github_token" {
  type        = string
  sensitive   = true
  description = "Github personal token for authentication."
}

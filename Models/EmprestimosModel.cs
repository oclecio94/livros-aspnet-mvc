using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace livros_aspnet_mvc.Models
{
    public class EmprestimosModel
    {
        public int Id { get; set; }
        
        [Required(ErrorMessage = "Digite o nome do recebedor!")]
        public string Recebedor { get; set; }

        [Required(ErrorMessage = "Digite o nome do fornecedor!")]
        public string Fornecedor { get; set; }
        
        [Required(ErrorMessage = "Digite o nome do livro!")]
        public string LivroEmprestado { get; set; }

        public DateTime DataUltimaAtualizacao  { get; set; } = DateTime.Now;
    }
}
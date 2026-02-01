import java.util.Scanner;
import java.util.ArrayList;



 class historia{
        ArrayList<String> histo = new ArrayList<String>();
        
    @Override
    public String toString() {
        return histo.toString();
    }

    }
    
    

public class exerciciodaora{
    
    public static void main(String[] args){
        Scanner entrada = new Scanner(System.in);
        historia objeto = new historia();
        String modo = "escrever";
        String palavra = "";
       
    while(true){
        switch (modo){
            case "escrever":{
                 System.out.println("Escreva uma palavra");
                 System.out.println("Historico");
                 System.out.println("sair");
                 palavra = entrada.nextLine();
                 objeto.histo.add(palavra);
            
               switch(palavra) {
                case "historico":{
                    modo = "historico";
                    break;
                }
                case "sair":{
                    modo = "sair";
                    break;
                }
               }
               break;
            }
            case "historico":{
                System.out.println(objeto);
                modo = "escrever";
                break;
            }
    
            case "sair":{
        entrada.close();
            }
        }
    }

    
}
     

}
